const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const hudScore = document.getElementById('score');
const hudLives = document.getElementById('lives');
const hudLevel = document.getElementById('level');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('startBtn');

// WebAudio simple synth
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}
function playBeep(frequency, durationMs, type = 'square', gainValue = 0.08) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = gainValue;
  osc.connect(gain).connect(audioCtx.destination);
  const now = audioCtx.currentTime;
  gain.gain.setValueAtTime(gainValue, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);
  osc.start();
  osc.stop(now + durationMs / 1000);
}
function sfxShoot() {
  // short upward blip
  playBeep(700, 70, 'square', 0.05);
  setTimeout(() => playBeep(900, 50, 'square', 0.05), 30);
}
function sfxExplosion() {
  // noise burst via detuned oscillators
  if (!audioCtx) return;
  const num = 5;
  const baseFreq = 80;
  for (let i = 0; i < num; i++) {
    const freq = baseFreq + Math.random() * 140;
    setTimeout(() => playBeep(freq, 180 + Math.random() * 120, 'sawtooth', 0.04), i * 8);
  }
}

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Game state
const state = {
  running: false,
  level: 1,
  score: 0,
  lives: 3,
  player: null,
  bullets: [],
  enemies: [],
  enemyBullets: [],
  lastTimestamp: 0,
  keyLeft: false,
  keyRight: false,
  keyShoot: false,
  shootCooldown: 0,
};

class Player {
  constructor() {
    this.width = 36;
    this.height = 28;
    this.x = (WIDTH - this.width) / 2;
    this.y = HEIGHT - 70;
    this.speed = 240; // px/s
    this.invincibleMs = 0; // brief invincibility after hit
  }
}

class Bullet {
  constructor(x, y, vy, friendly = true) {
    this.x = x; this.y = y; this.vy = vy; this.friendly = friendly;
    this.width = 4; this.height = 10;
  }
}

class Enemy {
  constructor(x, y, type) {
    this.x = x; this.y = y; this.type = type;
    this.width = 26; this.height = 22;
    this.alive = true;
  }
}

function resetGame() {
  state.level = 1;
  state.score = 0;
  state.lives = 3;
  startLevel(state.level);
}

function startLevel(level) {
  state.player = new Player();
  state.bullets = [];
  state.enemyBullets = [];
  state.enemies = createEnemyWave(level);
  state.shootCooldown = 0;
  state.running = true;
  overlay.classList.remove('show');
  hudScore.textContent = state.score;
  hudLives.textContent = state.lives;
  hudLevel.textContent = state.level;
}

function createEnemyWave(level) {
  const rows = Math.min(5 + Math.floor(level / 2), 8);
  const cols = 8;
  const spacingX = 48; const spacingY = 40;
  const startX = (WIDTH - (cols - 1) * spacingX) / 2;
  const startY = 80;
  const enemies = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = startX + c * spacingX;
      const y = startY + r * spacingY;
      const type = r === 0 ? 'bee' : r < 3 ? 'bug' : 'ufo';
      enemies.push(new Enemy(x, y, type));
    }
  }
  return enemies;
}

// Input handling
window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') state.keyLeft = true;
  if (e.code === 'ArrowRight') state.keyRight = true;
  if (e.code === 'Space') state.keyShoot = true;
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft') state.keyLeft = false;
  if (e.code === 'ArrowRight') state.keyRight = false;
  if (e.code === 'Space') state.keyShoot = false;
});

startBtn.addEventListener('click', () => {
  if (!state.running) {
    ensureAudio();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    resetGame();
    requestAnimationFrame(loop);
  }
});

function loop(timestamp) {
  if (!state.running) {
    return;
  }
  const dt = Math.min(32, timestamp - state.lastTimestamp) / 1000;
  state.lastTimestamp = timestamp;

  update(dt);
  render();
  requestAnimationFrame(loop);
}

function update(dt) {
  // Player movement
  const player = state.player;
  if (player) {
    let dir = 0;
    if (state.keyLeft) dir -= 1;
    if (state.keyRight) dir += 1;
    player.x += dir * player.speed * dt;
    player.x = Math.max(8, Math.min(WIDTH - player.width - 8, player.x));
    if (player.invincibleMs > 0) player.invincibleMs -= dt * 1000;
  }

  // Shooting
  state.shootCooldown -= dt;
  if (state.keyShoot && state.shootCooldown <= 0) {
    shoot();
    state.shootCooldown = 0.25; // seconds
  }

  // Update bullets
  for (const b of state.bullets) {
    b.y += b.vy * dt;
  }
  for (const b of state.enemyBullets) {
    b.y += b.vy * dt;
  }
  // Remove offscreen bullets
  state.bullets = state.bullets.filter(b => b.y + b.height > 0);
  state.enemyBullets = state.enemyBullets.filter(b => b.y < HEIGHT + 20);

  // Enemy swarm movement
  const speedX = 30 + state.level * 5;
  const speedY = 10 + state.level * 2;
  const time = performance.now() / 1000;
  const sway = Math.sin(time * 1.2) * 30;
  const drop = Math.sin(time * 0.9) * 6;
  for (let i = 0; i < state.enemies.length; i++) {
    const e = state.enemies[i];
    if (!e.alive) continue;
    e.x += Math.sin((e.y + time * speedX) * 0.02) * 10 * dt + sway * 0.02;
    e.y += drop * 0.02 + Math.sin((e.x + time * speedY) * 0.02) * 6 * dt;

    // Enemy random shooting
    if (Math.random() < (0.0015 + state.level * 0.0005)) {
      state.enemyBullets.push(new Bullet(e.x + e.width / 2, e.y + e.height, 220, false));
    }
  }

  // Collisions
  handleCollisions();

  // Level progression
  if (state.enemies.every(e => !e.alive)) {
    state.level += 1;
    hudLevel.textContent = state.level;
    startLevel(state.level);
  }
}

function shoot() {
  if (!state.player) return;
  const px = state.player.x + state.player.width / 2 - 2;
  const py = state.player.y - 8;
  state.bullets.push(new Bullet(px, py, -360, true));
  try { sfxShoot(); } catch {}
}

function handleCollisions() {
  const p = state.player;
  // Player bullets vs enemies
  for (const b of state.bullets) {
    if (!b.friendly) continue;
    for (const e of state.enemies) {
      if (!e.alive) continue;
      if (rectsOverlap(b, e)) {
        e.alive = false;
        b.y = -9999; // remove
        const gain = e.type === 'bee' ? 150 : e.type === 'bug' ? 100 : 50;
        state.score += gain;
        hudScore.textContent = state.score;
        try { sfxExplosion(); } catch {}
        break;
      }
    }
  }

  // Enemy bullets vs player
  if (p && p.invincibleMs <= 0) {
    for (const b of state.enemyBullets) {
      if (!b.friendly && rectsOverlap(b, p)) {
        b.y = HEIGHT + 9999; // remove
        playerHit();
        break;
      }
    }
  }

  // Enemies reaching bottom or colliding with player
  for (const e of state.enemies) {
    if (!e.alive) continue;
    if (p && rectsOverlap(e, p)) {
      e.alive = false;
      playerHit();
    }
    if (e.y + e.height >= HEIGHT - 60) {
      // Treat as player hit
      e.alive = false;
      playerHit();
    }
  }

  // Cleanup dead enemies
  state.enemies = state.enemies.filter(e => e.alive);
}

function playerHit() {
  state.lives -= 1;
  hudLives.textContent = state.lives;
  if (state.lives <= 0) {
    gameOver();
    return;
  }
  // brief invincibility and reset position
  state.player.x = (WIDTH - state.player.width) / 2;
  state.player.invincibleMs = 1500;
}

function gameOver() {
  state.running = false;
  overlay.classList.add('show');
  overlay.querySelector('h1').textContent = '游戏结束';
  overlay.querySelector('p').textContent = `得分：${state.score}`;
  startBtn.textContent = '再来一局';
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function render() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // Stars background
  drawStars();

  // Player
  if (state.player) drawPlayer(state.player);

  // Bullets
  ctx.fillStyle = '#8be9fd';
  for (const b of state.bullets) ctx.fillRect(b.x, b.y, b.width, b.height);
  ctx.fillStyle = '#ff8b8b';
  for (const b of state.enemyBullets) ctx.fillRect(b.x, b.y, b.width, b.height);

  // Enemies
  for (const e of state.enemies) drawEnemy(e);
}

function drawStars() {
  ctx.save();
  const t = performance.now() / 1000;
  for (let i = 0; i < 80; i++) {
    const x = (i * 53.17 + Math.sin(t * (0.8 + (i % 7) * 0.03)) * 120) % WIDTH;
    const y = (i * 97.31 + t * (20 + (i % 5) * 8)) % HEIGHT;
    const s = (i % 3) + 1;
    ctx.globalAlpha = 0.3 + (i % 5) * 0.12;
    ctx.fillStyle = i % 2 ? '#a0c4ff' : '#bdb2ff';
    ctx.fillRect(x, y, s, s);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawPlayer(p) {
  ctx.save();
  const flicker = p.invincibleMs > 0 && Math.floor(p.invincibleMs / 100) % 2 === 0;
  if (flicker) ctx.globalAlpha = 0.5;
  // body
  ctx.fillStyle = '#23a6d5';
  ctx.fillRect(p.x + 14, p.y, 8, p.height);
  // wings
  ctx.fillStyle = '#89f6ff';
  ctx.fillRect(p.x, p.y + 8, 14, 8);
  ctx.fillRect(p.x + 22, p.y + 8, 14, 8);
  // cockpit
  ctx.fillStyle = '#e5f0ff';
  ctx.fillRect(p.x + 16, p.y + 6, 4, 6);
  ctx.restore();
}

function drawEnemy(e) {
  ctx.save();
  if (e.type === 'bee') {
    ctx.fillStyle = '#ffd166';
  } else if (e.type === 'bug') {
    ctx.fillStyle = '#06d6a0';
  } else {
    ctx.fillStyle = '#ff6b6b';
  }
  // simple pixel-art-ish enemy
  ctx.fillRect(e.x + 6, e.y, 14, 6);
  ctx.fillRect(e.x + 2, e.y + 6, 22, 6);
  ctx.fillRect(e.x, e.y + 12, 26, 6);
  ctx.fillRect(e.x + 6, e.y + 18, 14, 4);
  ctx.restore();
}
