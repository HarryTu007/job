(function(){
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext('2d');
  const devicePixelRatio = window.devicePixelRatio || 1;

  const newGameBtn = document.getElementById('newGameBtn');
  const undoBtn = document.getElementById('undoBtn');
  const sizeSelect = document.getElementById('boardSizeSelect');
  const turnIndicator = document.getElementById('turnIndicator');
  const resultEl = document.getElementById('result');

  let boardSize = parseInt(sizeSelect.value, 10);
  let gridSize = 15; // fallback; updated by setBoardSize
  let cellPx = 40;   // dynamic based on canvas size
  let stoneRadius = 16;
  let board = [];
  let current = 1; // 1 black, 2 white
  let history = [];
  let gameOver = false;
  let hoverCell = null; // {r, c} or null
  let winningLineState = null; // persist highlight across renders

  function setCanvasSize() {
    // Fit CSS size, then set actual pixel size for HiDPI
    const rect = canvas.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  function setBoardSize(size) {
    boardSize = size;
    gridSize = size;
    board = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
    history = [];
    current = 1;
    gameOver = false;
    hoverCell = null;
    winningLineState = null;
    resultEl.textContent = '';
    turnIndicator.textContent = '黑棋先手';
    resizeAndRender();
  }

  function resizeAndRender() {
    // Reset the transform before resizing to avoid compounding scales
    ctx.setTransform(1,0,0,1,0,0);
    setCanvasSize();
    const rect = canvas.getBoundingClientRect();
    cellPx = Math.min(rect.width, rect.height) / (gridSize + 1);
    stoneRadius = Math.max(10, Math.min(24, cellPx * 0.45));
    render();
  }

  function drawBoard() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // background wood texture
    const grd = ctx.createLinearGradient(0, 0, w, h);
    grd.addColorStop(0, '#deb887');
    grd.addColorStop(1, '#d1a774');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    // border
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 2;
    ctx.strokeRect(cellPx * 0.5, cellPx * 0.5, cellPx * gridSize, cellPx * gridSize);

    // grid lines
    ctx.strokeStyle = 'rgba(0,0,0,0.55)';
    ctx.lineWidth = 1;
    for (let i = 0; i < gridSize; i++) {
      const x = cellPx * (i + 1);
      const y = cellPx * (i + 1);
      ctx.beginPath();
      // vertical
      ctx.moveTo(x, cellPx);
      ctx.lineTo(x, cellPx * gridSize);
      // horizontal
      ctx.moveTo(cellPx, y);
      ctx.lineTo(cellPx * gridSize, y);
      ctx.stroke();
    }

    // star points for standard sizes
    const stars = gridSize === 19 ? [4, 10, 16] : gridSize === 15 ? [4, 8, 12] : [];
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    for (const r of stars) {
      for (const c of stars) {
        ctx.beginPath();
        ctx.arc(c * cellPx, r * cellPx, Math.max(2, cellPx * 0.07), 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawStone(cx, cy, player, isLast) {
    const gradient = ctx.createRadialGradient(
      cx - stoneRadius * 0.4, cy - stoneRadius * 0.4, stoneRadius * 0.1,
      cx, cy, stoneRadius
    );
    if (player === 1) {
      gradient.addColorStop(0, '#555');
      gradient.addColorStop(1, '#000');
    } else {
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(1, '#ddd');
    }
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, stoneRadius, 0, Math.PI * 2);
    ctx.fill();

    if (isLast) {
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, stoneRadius + 2, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function render() {
    drawBoard();
    // stones
    let last = history[history.length - 1];
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const v = board[r][c];
        if (v !== 0) {
          const cx = cellPx * (c + 1);
          const cy = cellPx * (r + 1);
          const isLast = last && last.r === r && last.c === c;
          drawStone(cx, cy, v, isLast);
        }
      }
    }

    // hover preview (ghost stone)
    if (!gameOver && hoverCell && board[hoverCell.r] && board[hoverCell.r][hoverCell.c] === 0) {
      const cx = cellPx * (hoverCell.c + 1);
      const cy = cellPx * (hoverCell.r + 1);
      ctx.save();
      ctx.globalAlpha = 0.55;
      drawStone(cx, cy, current, false);
      ctx.restore();
    }

    // winning line highlight
    if (winningLineState && winningLineState.length === 5) {
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.9)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      const start = winningLineState[0];
      ctx.moveTo(cellPx * (start.c + 1), cellPx * (start.r + 1));
      for (let i = 1; i < winningLineState.length; i++) {
        const p = winningLineState[i];
        ctx.lineTo(cellPx * (p.c + 1), cellPx * (p.r + 1));
      }
      ctx.stroke();
    }
  }

  function checkWinAt(r, c) {
    const player = board[r][c];
    if (!player) return null;
    const dirs = [
      [0,1], [1,0], [1,1], [1,-1]
    ];
    for (const [dr, dc] of dirs) {
      let count = 1;
      const line = [{r, c}];
      // forward
      let rr = r + dr, cc = c + dc;
      while (rr>=0 && rr<gridSize && cc>=0 && cc<gridSize && board[rr][cc]===player) {
        line.push({r: rr, c: cc});
        count++; rr += dr; cc += dc;
      }
      // backward
      rr = r - dr; cc = c - dc;
      while (rr>=0 && rr<gridSize && cc>=0 && cc<gridSize && board[rr][cc]===player) {
        line.unshift({r: rr, c: cc});
        count++; rr -= dr; cc -= dc;
      }
      if (count >= 5) {
        return line.slice(0,5); // highlight 5
      }
    }
    return null;
  }

  function handleClick(evt) {
    if (gameOver) return;
    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    const c = Math.round(x / cellPx) - 1;
    const r = Math.round(y / cellPx) - 1;
    if (r<0 || c<0 || r>=gridSize || c>=gridSize) return;
    if (board[r][c] !== 0) return;

    board[r][c] = current;
    history.push({r, c, player: current});
    const winLine = checkWinAt(r, c);
    if (winLine) {
      gameOver = true;
      winningLineState = winLine;
      resultEl.textContent = (current === 1 ? '黑棋' : '白棋') + '获胜！';
      turnIndicator.textContent = '对局结束';
      render();
      return;
    }

    current = current === 1 ? 2 : 1;
    turnIndicator.textContent = current === 1 ? '黑棋落子' : '白棋落子';

    // draw detection
    if (history.length >= gridSize * gridSize) {
      gameOver = true;
      resultEl.textContent = '平局';
      turnIndicator.textContent = '对局结束';
    }
    render();
  }

  function undo() {
    if (history.length === 0) return;
    const last = history.pop();
    board[last.r][last.c] = 0;
    current = last.player; // back to the player who just moved
    resultEl.textContent = '';
    gameOver = false;
    winningLineState = null;
    turnIndicator.textContent = current === 1 ? '黑棋落子' : '白棋落子';
    render();
  }

  function handleMove(evt) {
    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    const c = Math.round(x / cellPx) - 1;
    const r = Math.round(y / cellPx) - 1;

    let next = null;
    if (!gameOver && r>=0 && c>=0 && r<gridSize && c<gridSize && board[r][c] === 0) {
      next = { r, c };
    }
    const changed = (!hoverCell && next) || (hoverCell && (!next || hoverCell.r !== next.r || hoverCell.c !== next.c));
    if (changed) {
      hoverCell = next;
      render();
    }
  }

  function handleLeave() {
    if (hoverCell) {
      hoverCell = null;
      render();
    }
  }

  // events
  canvas.addEventListener('click', handleClick);
  canvas.addEventListener('mousemove', handleMove);
  canvas.addEventListener('mouseleave', handleLeave);
  window.addEventListener('resize', resizeAndRender);
  newGameBtn.addEventListener('click', () => setBoardSize(parseInt(sizeSelect.value, 10)));
  undoBtn.addEventListener('click', undo);
  sizeSelect.addEventListener('change', () => setBoardSize(parseInt(sizeSelect.value, 10)));

  // boot
  setTimeout(() => {
    setBoardSize(parseInt(sizeSelect.value, 10));
  }, 0);
})();
