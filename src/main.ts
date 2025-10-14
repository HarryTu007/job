import * as THREE from 'three';
import { InputManager } from './input';
import { buildLevel, Obstacle, Level } from './level';
import { resolveSphereVsAABB, AABB } from './physics';

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Scene & Camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 60, 220);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
scene.add(camera);

// Lights
const hemi = new THREE.HemisphereLight(0xddeeff, 0x223344, 0.8);
scene.add(hemi);

const dir = new THREE.DirectionalLight(0xffffff, 0.8);
dir.position.set(20, 30, -20);
dir.castShadow = true;
dir.shadow.mapSize.set(2048, 2048);
dir.shadow.camera.near = 0.5;
dir.shadow.camera.far = 200;
scene.add(dir);

// Sky dome (subtle)
const skyGeo = new THREE.SphereGeometry(300, 32, 16);
const skyMat = new THREE.MeshBasicMaterial({ color: 0xbbe7ff, side: THREE.BackSide });
const sky = new THREE.Mesh(skyGeo, skyMat);
scene.add(sky);

// Ground shadow receiver planes under platforms (optional - skip separate ground)

// Level
const level: Level = buildLevel(scene);

// Ball
const BALL_RADIUS = 0.6;
const ballGeo = new THREE.SphereGeometry(BALL_RADIUS, 32, 16);
const ballMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.6 });
const ball = new THREE.Mesh(ballGeo, ballMat);
ball.castShadow = true;
ball.receiveShadow = true;
scene.add(ball);

// Physics state
const gravity = new THREE.Vector3(0, -18, 0);
const velocity = new THREE.Vector3();
const position = level.startPosition.clone();
let onGround = false;
let attempts = 1;
let started = false;
let finished = false;
let startTime = 0;
let elapsed = 0;

// Camera follow
const camOffset = new THREE.Vector3(0, 5.5, -10);
const camTarget = new THREE.Vector3();

// Input
const input = new InputManager();

// UI
const overlay = document.getElementById('overlay')!;
const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const timerEl = document.getElementById('timer')!;
const attemptsEl = document.getElementById('attempts')!;
const progressEl = document.getElementById('progress')!;

function resetBall(): void {
  position.copy(level.startPosition);
  velocity.set(0, 0, 0);
  onGround = false;
}

function restartRun(): void {
  started = false;
  finished = false;
  elapsed = 0;
  attempts = 1;
  overlay.classList.add('show');
  resetBall();
}

startBtn.addEventListener('click', () => {
  if (!started) {
    started = true;
    startTime = performance.now();
    overlay.classList.remove('show');
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    attempts += 1;
    resetBall();
  }
  if ((e.key === 'Enter' || e.key === 'NumpadEnter')) {
    restartRun();
  }
});

function updateHUD() {
  timerEl.textContent = `${(elapsed / 1000).toFixed(1)}s`;
  attemptsEl.textContent = `x${attempts}`;
  const prog = THREE.MathUtils.clamp((position.z / level.totalLength) * 100, 0, 100);
  progressEl.textContent = `${Math.round(prog)}%`;
}

function updateObstacles(deltaTime: number) {
  for (const ob of level.obstacles) {
    if (!ob.motion) continue;
    if (ob.motion.kind === 'rotate' && ob.motion.axis && ob.motion.speed) {
      const angle = ob.motion.speed * deltaTime;
      const axis = ob.motion.axis;
      ob.mesh.rotateOnAxis(axis, angle);
    } else if (ob.motion.kind === 'translate' && ob.motion.path && ob.motion.amplitude && ob.motion.speed && ob.motion.origin !== undefined) {
      const t = performance.now() / 1000;
      const s = Math.sin(t * ob.motion.speed + (ob.motion.phase ?? 0)) * ob.motion.amplitude;
      ob.mesh.position.copy(ob.motion.origin).addScaledVector(ob.motion.path, s);
    }
  }
}

const _aabb: AABB = { min: new THREE.Vector3(), max: new THREE.Vector3() };
const _box3 = new THREE.Box3();

function computeWorldAABBForObstacle(ob: Obstacle, out: AABB): AABB {
  _box3.setFromObject(ob.mesh);
  out.min.copy(_box3.min);
  out.max.copy(_box3.max);
  return out;
}

function step(deltaTime: number) {
  // Input movement (xz plane)
  const move = input.getMoveAxis();
  const accelerationXZ = 28; // responsiveness
  const moveDir = new THREE.Vector3(move.x, 0, move.z);
  velocity.addScaledVector(moveDir, accelerationXZ * deltaTime);

  // Limit horizontal speed
  const horizontalVel = new THREE.Vector3(velocity.x, 0, velocity.z);
  const maxSpeed = 12;
  if (horizontalVel.lengthSq() > maxSpeed * maxSpeed) {
    horizontalVel.setLength(maxSpeed);
    velocity.x = horizontalVel.x;
    velocity.z = horizontalVel.z;
  }

  // Gravity
  velocity.addScaledVector(gravity, deltaTime);

  // Jump
  if (onGround && (input.wasPressed('Space') || input.consumePressed('Space'))) {
    velocity.y = 8.5;
    onGround = false;
  }

  // Integrate
  position.addScaledVector(velocity, deltaTime);

  // Damping/friction
  if (onGround) {
    velocity.x *= 0.90;
    velocity.z *= 0.90;
  } else {
    velocity.x *= 0.995;
    velocity.z *= 0.995;
  }

  // Collisions (iterate a few times to resolve stacking)
  onGround = false;
  for (let iter = 0; iter < 3; iter++) {
    for (const ob of level.obstacles) {
      if (ob.type === 'finish') continue; // treat finish separately for win condition
      computeWorldAABBForObstacle(ob, _aabb);
      const res = resolveSphereVsAABB(position, BALL_RADIUS, _aabb, velocity);
      if (res.collided && res.isGround) onGround = true;
    }
  }

  // Finish check
  const finishBox = computeWorldAABBForObstacle(level.obstacles.find(o => o.type === 'finish')!, _aabb);
  const inFinish = position.x >= finishBox.min.x - BALL_RADIUS && position.x <= finishBox.max.x + BALL_RADIUS
    && position.y >= finishBox.min.y - BALL_RADIUS && position.y <= finishBox.max.y + BALL_RADIUS
    && position.z >= finishBox.min.z - BALL_RADIUS && position.z <= finishBox.max.z + BALL_RADIUS;
  if (!finished && inFinish) {
    finished = true;
    started = false;
    overlay.classList.add('show');
    (overlay.querySelector('h1') as HTMLElement).textContent = '胜利!';
    (overlay.querySelector('p') as HTMLElement).textContent = '按 Enter 重新开始';
    (startBtn as HTMLButtonElement).textContent = '再来一局';
  }

  // Fall off
  if (position.y < -20) {
    attempts += 1;
    resetBall();
  }

  // Update mesh
  ball.position.copy(position);
  // Fake rolling
  const horizontalSpeed = Math.hypot(velocity.x, velocity.z);
  if (horizontalSpeed > 0.01) {
    const axis = new THREE.Vector3(velocity.z, 0, -velocity.x).normalize();
    const angle = (horizontalSpeed / BALL_RADIUS) * deltaTime;
    ball.rotateOnAxis(axis, angle);
  }

  // Camera follow (smooth)
  const desired = position.clone().add(camOffset);
  camera.position.lerp(desired, 1 - Math.pow(0.001, deltaTime));
  camTarget.copy(position);
  camera.lookAt(camTarget);
}

let last = performance.now();
function animate(now: number) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;

  updateObstacles(dt);

  if (started && !finished) {
    step(dt);
    elapsed = now - startTime;
  }

  updateHUD();
  renderer.render(scene, camera);
  input.endFrame();
}

resetBall();
// Set initial camera
camera.position.copy(position.clone().add(camOffset));

animate(performance.now());
