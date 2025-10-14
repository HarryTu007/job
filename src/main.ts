import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';

// Basic sizes
const canvasContainer = document.getElementById('app')!;
const sizes = { width: window.innerWidth, height: window.innerHeight };

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
canvasContainer.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x88ccff);

// Fog
scene.fog = new THREE.Fog(0x88ccff, 50, 180);

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 500);
camera.position.set(0, 8, 16);
scene.add(camera);

// Controls (debug view toggle)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // disabled by default; press "C" to toggle

// Lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x4477aa, 0.8);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
scene.add(dirLight);

// Skybox gradient plane
const skyGeo = new THREE.SphereGeometry(400, 32, 32);
const skyMat = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  uniforms: {
    topColor: { value: new THREE.Color(0x77b8ff) },
    bottomColor: { value: new THREE.Color(0xffffff) }
  },
  vertexShader: `varying vec3 vWorldPosition;\nvoid main(){\n vec4 worldPosition = modelMatrix * vec4(position,1.0);\n vWorldPosition = worldPosition.xyz;\n gl_Position = projectionMatrix * viewMatrix * worldPosition;\n}`,
  fragmentShader: `varying vec3 vWorldPosition; uniform vec3 topColor; uniform vec3 bottomColor;\nvoid main(){\n float h = normalize(vWorldPosition).y * 0.5 + 0.5;\n gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.0,1.0,h)),1.0);\n}`
});
const sky = new THREE.Mesh(skyGeo, skyMat);
scene.add(sky);

// Physics world
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -20, 0) });

// Materials
const defaultMaterial = new CANNON.Material('default');
const contact = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
  friction: 0.3,
  restitution: 0.1
});
world.defaultContactMaterial = contact;

// Utility
function createPlatform(size: THREE.Vector3, position: THREE.Vector3, color = 0xdddddd) {
  // Visual
  const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
  const mat = new THREE.MeshStandardMaterial({ color });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  // Physics
  const body = new CANNON.Body({ mass: 0, material: defaultMaterial });
  const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));
  body.addShape(shape);
  body.position.set(position.x, position.y, position.z);
  world.addBody(body);
  return { mesh, body };
}

// Level layout
const platforms: Array<{ mesh: THREE.Mesh; body: CANNON.Body; update?: (t: number) => void }> = [];

// Start platform
platforms.push(createPlatform(new THREE.Vector3(8, 1, 8), new THREE.Vector3(0, 0, 0), 0xaad1ff));

// Straight platforms
for (let i = 1; i <= 6; i++) {
  platforms.push(createPlatform(new THREE.Vector3(6, 1, 6), new THREE.Vector3(i * 12, 0, 0), 0xffffff));
}

// Moving platform
{
  const size = new THREE.Vector3(6, 1, 6);
  const basePos = new THREE.Vector3(84, 0, 0);
  const amplitude = 5;
  const { mesh, body } = createPlatform(size, basePos, 0xffe0aa);
  const startY = basePos.y + 6;
  mesh.position.y = startY;
  body.position.y = startY;
  body.type = CANNON.BODY_TYPES.KINEMATIC;
  platforms.push({ mesh, body, update: (t: number) => {
    const y = startY + Math.sin(t * 1.5) * amplitude;
    mesh.position.y = y;
    body.position.y = y;
    body.velocity.set(0, Math.cos(t * 1.5) * amplitude * 1.5, 0);
  }});
}

// Rotating beam obstacle
{
  const beamLength = 12;
  const radius = 0.3;
  const geo = new THREE.CylinderGeometry(radius, radius, beamLength, 16);
  const mat = new THREE.MeshStandardMaterial({ color: 0xff7676 });
  const beam = new THREE.Mesh(geo, mat);
  beam.castShadow = true;
  scene.add(beam);

  const pivot = new THREE.Object3D();
  scene.add(pivot);
  pivot.position.set(120, 3, 0);
  beam.position.copy(pivot.position);
  beam.rotation.z = Math.PI / 2;

  const body = new CANNON.Body({ mass: 0, material: defaultMaterial });
  const shape = new CANNON.Cylinder(radius, radius, beamLength, 16);
  const q = new CANNON.Quaternion();
  q.setFromEuler(Math.PI / 2, 0, 0);
  body.addShape(shape, new CANNON.Vec3(0, 0, 0), q);
  body.position.set(pivot.position.x, pivot.position.y, pivot.position.z);
  world.addBody(body);

  platforms.push({ mesh: beam as any, body, update: (t: number) => {
    const speed = 1.6;
    const angle = t * speed;
    const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    const dir = new THREE.Vector3(beamLength / 2, 0, 0).applyQuaternion(rot);
    beam.position.set(pivot.position.x, pivot.position.y, pivot.position.z);
    beam.quaternion.copy(rot);
    body.quaternion.set(rot.x, rot.y, rot.z, rot.w);
  }});
}

// Narrow path
for (let i = 1; i <= 6; i++) {
  platforms.push(createPlatform(new THREE.Vector3(3, 1, 3), new THREE.Vector3(140 + i * 8, 0, (i % 2 === 0 ? 3 : -3)), 0xffffff));
}

// Finish platform
const finishPlatform = createPlatform(new THREE.Vector3(10, 1, 10), new THREE.Vector3(200, 0, 0), 0xaaffaa);
platforms.push(finishPlatform);

// Finish portal (visual only)
const portalGeo = new THREE.TorusGeometry(2, 0.2, 16, 100);
const portalMat = new THREE.MeshStandardMaterial({ color: 0x77ffcc, emissive: 0x226644, emissiveIntensity: 0.6 });
const portal = new THREE.Mesh(portalGeo, portalMat);
portal.position.set(200, 3, 0);
portal.rotation.y = Math.PI / 2;
portal.castShadow = true;
scene.add(portal);

// Ground fall catcher (no visual)
const fallY = -40;
const fallCatcher = new CANNON.Body({ mass: 0 });
fallCatcher.addShape(new CANNON.Box(new CANNON.Vec3(500, 2, 500)));
fallCatcher.position.set(0, fallY, 0);
world.addBody(fallCatcher);

// Player ball
const ballRadius = 1;
const ballGeo = new THREE.SphereGeometry(ballRadius, 32, 32);
const ballMat = new THREE.MeshStandardMaterial({ color: 0x3399ff, roughness: 0.4, metalness: 0.1 });
const ballMesh = new THREE.Mesh(ballGeo, ballMat);
ballMesh.castShadow = true;
scene.add(ballMesh);

const ballBody = new CANNON.Body({ mass: 2, material: defaultMaterial });
ballBody.addShape(new CANNON.Sphere(ballRadius));
world.addBody(ballBody);

// Checkpoints
type Checkpoint = { position: THREE.Vector3; label: string };
const checkpoints: Checkpoint[] = [
  { position: new THREE.Vector3(0, 3, 0), label: '起点' },
  { position: new THREE.Vector3(84, 12, 0), label: '升降台' },
  { position: new THREE.Vector3(140, 8, 0), label: '窄桥' },
  { position: new THREE.Vector3(200, 8, 0), label: '终点' }
];
let currentCheckpointIndex = 0;

function respawnAt(index: number) {
  currentCheckpointIndex = Math.max(0, Math.min(checkpoints.length - 1, index));
  const cp = checkpoints[currentCheckpointIndex].position;
  ballBody.position.set(cp.x, cp.y, cp.z);
  ballBody.velocity.set(0, 0, 0);
  ballBody.angularVelocity.set(0, 0, 0);
}

respawnAt(0);

// HUD
const timerEl = document.getElementById('timer')!;
const checkpointEl = document.getElementById('checkpoint')!;
checkpointEl.textContent = checkpoints[currentCheckpointIndex].label;
let startTime = performance.now();
let finished = false;

function onReachFinish() {
  finished = true;
  const timeSec = ((performance.now() - startTime) / 1000).toFixed(2);
  const hints = document.getElementById('centerHints')!;
  hints.innerHTML = `<div class="panel">通关！用时 ${timeSec}s，按 R 重玩</div>`;
}

// Controls
const keys: Record<string, boolean> = {};
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code === 'KeyC') {
    controls.enabled = !controls.enabled;
  }
});
window.addEventListener('keyup', (e) => {
  keys[e.code] = false;
});

function getMoveInput(): THREE.Vector3 {
  const dir = new THREE.Vector3();
  if (keys['KeyW'] || keys['ArrowUp']) dir.z -= 1;
  if (keys['KeyS'] || keys['ArrowDown']) dir.z += 1;
  if (keys['KeyA'] || keys['ArrowLeft']) dir.x -= 1;
  if (keys['KeyD'] || keys['ArrowRight']) dir.x += 1;
  return dir.normalize();
}

let canJump = false;
ballBody.addEventListener('collide', (e: any) => {
  // Basic ground contact check
  const up = new CANNON.Vec3(0, 1, 0);
  const contact = e.contact as CANNON.ContactEquation;
  if (!contact) return;
  const contactNormal = new CANNON.Vec3();
  if (contact.bi.id === ballBody.id) {
    contact.ni.negate(contactNormal);
  } else {
    contactNormal.copy(contact.ni as any);
  }
  if (contactNormal.dot(up) > 0.5) {
    canJump = true;
  }
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    if (canJump) {
      ballBody.velocity.y = 8;
      canJump = false;
    }
  }
  if (e.code === 'KeyR') {
    if (finished) {
      finished = false;
      startTime = performance.now();
      respawnAt(0);
      const hints = document.getElementById('centerHints')!;
      hints.innerHTML = '<div class="panel">WASD移动，空格跳跃，R重置到最近检查点</div>';
    } else {
      respawnAt(currentCheckpointIndex);
    }
  }
});

// Camera follow
const cameraOffset = new THREE.Vector3(-8, 6, 10);
const cameraLookOffset = new THREE.Vector3(0, 2, 0);

// Resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Helper: update checkpoints
function updateCheckpointProgress() {
  // Reach new checkpoint thresholds by x positions
  const x = ballBody.position.x;
  if (currentCheckpointIndex < 1 && x > 60) {
    currentCheckpointIndex = 1;
  }
  if (currentCheckpointIndex < 2 && x > 130) {
    currentCheckpointIndex = 2;
  }
  if (currentCheckpointIndex < 3 && x > 195) {
    currentCheckpointIndex = 3;
  }
  checkpointEl.textContent = checkpoints[currentCheckpointIndex].label;
}

// Game loop
const clock = new THREE.Clock();
function tick() {
  const dt = Math.min(0.033, clock.getDelta());
  const t = clock.elapsedTime;

  // Update moving/rotating obstacles
  platforms.forEach((p) => p.update?.(t));

  // Inputs -> force
  const input = getMoveInput();
  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  forward.y = 0; forward.normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).negate();
  const move = new THREE.Vector3();
  move.addScaledVector(forward, input.z);
  move.addScaledVector(right, input.x);
  move.normalize();

  const moveForce = 30;
  const force = new CANNON.Vec3(move.x * moveForce, 0, move.z * moveForce);
  ballBody.applyForce(force, ballBody.position);

  // Physics step
  world.step(1 / 60, dt, 3);

  // Sync visuals
  ballMesh.position.set(ballBody.position.x, ballBody.position.y, ballBody.position.z);
  ballMesh.quaternion.set(ballBody.quaternion.x, ballBody.quaternion.y, ballBody.quaternion.z, ballBody.quaternion.w);

  // Camera chase
  const targetPos = new THREE.Vector3(ballMesh.position.x, ballMesh.position.y, ballMesh.position.z);
  const desired = targetPos.clone().add(cameraOffset);
  camera.position.lerp(desired, 0.08);
  camera.lookAt(targetPos.clone().add(cameraLookOffset));

  // Timer & checkpoint
  if (!finished) {
    const elapsed = (performance.now() - startTime) / 1000;
    timerEl.textContent = elapsed.toFixed(2);
  }
  updateCheckpointProgress();

  // Finish detection
  if (!finished) {
    const distToPortal = targetPos.distanceTo(portal.position);
    if (distToPortal < 2.5) onReachFinish();
  }

  // Respawn if fallen
  if (ballBody.position.y < fallY + 2) {
    respawnAt(currentCheckpointIndex);
  }

  // Render
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

// Init shadow receivers for platforms
for (const p of platforms) {
  p.mesh.receiveShadow = true;
}

requestAnimationFrame(tick);
