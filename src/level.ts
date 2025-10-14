import * as THREE from 'three';

export type ObstacleType = 'platform' | 'rotator' | 'moving' | 'finish';

export interface Obstacle {
  mesh: THREE.Mesh;
  type: ObstacleType;
  halfSize: THREE.Vector3;
  motion?: {
    kind: 'rotate' | 'translate';
    axis?: THREE.Vector3; // for rotate
    speed?: number; // for rotate/translate
    amplitude?: number; // for translate
    path?: THREE.Vector3; // translate direction
    origin?: THREE.Vector3; // translate origin
    phase?: number; // offset
  };
}

export interface Level {
  obstacles: Obstacle[];
  startPosition: THREE.Vector3;
  finishMesh: THREE.Mesh;
  totalLength: number;
}

function createBox(
  size: THREE.Vector3,
  position: THREE.Vector3,
  color: number,
  metalness = 0.1,
  roughness = 0.9,
): THREE.Mesh {
  const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
  const mat = new THREE.MeshStandardMaterial({ color, metalness, roughness });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function buildLevel(scene: THREE.Scene): Level {
  const obstacles: Obstacle[] = [];

  const pastel = [0x86efac, 0x93c5fd, 0xf5d0fe, 0xfde68a, 0x7dd3fc, 0xfca5a5, 0xa7f3d0];
  const randomColor = () => pastel[Math.floor(Math.random() * pastel.length)];

  // Start platform
  const startSize = new THREE.Vector3(10, 1, 10);
  const startMesh = createBox(startSize, new THREE.Vector3(0, 0, 0), 0xffffff);
  scene.add(startMesh);
  obstacles.push({ mesh: startMesh, type: 'platform', halfSize: startSize.clone().multiplyScalar(0.5) });

  const segments = 16;
  const stepZ = 12;
  let z = 12;
  for (let i = 1; i <= segments; i++) {
    const xOffset = (Math.random() - 0.5) * 8;
    const platformSize = new THREE.Vector3(7, 0.8, 8);
    const platform = createBox(platformSize, new THREE.Vector3(xOffset, 0, z), randomColor());
    scene.add(platform);
    obstacles.push({ mesh: platform, type: 'platform', halfSize: platformSize.clone().multiplyScalar(0.5) });

    // Add a challenge on some segments
    if (i % 3 === 0) {
      // Rotating bar above the platform
      const barSize = new THREE.Vector3(12, 0.4, 0.6);
      const bar = createBox(barSize, new THREE.Vector3(xOffset, 1.2, z), 0xffa07a, 0.2, 0.7);
      scene.add(bar);
      obstacles.push({
        mesh: bar,
        type: 'rotator',
        halfSize: barSize.clone().multiplyScalar(0.5),
        motion: { kind: 'rotate', axis: new THREE.Vector3(0, 1, 0), speed: 1.2 + Math.random() * 0.8 },
      });
    } else if (i % 4 === 0) {
      // Moving platform sideways
      const mSize = new THREE.Vector3(5, 0.8, 6);
      const m = createBox(mSize, new THREE.Vector3(xOffset, 0, z + 8), 0xbad7ff);
      scene.add(m);
      obstacles.push({
        mesh: m,
        type: 'moving',
        halfSize: mSize.clone().multiplyScalar(0.5),
        motion: {
          kind: 'translate',
          path: new THREE.Vector3(1, 0, 0),
          amplitude: 3 + Math.random() * 2,
          speed: 0.8 + Math.random() * 0.8,
          origin: m.position.clone(),
          phase: Math.random() * Math.PI * 2,
        },
      });
    }

    z += stepZ;
  }

  // Finish platform
  const finishSize = new THREE.Vector3(12, 1, 12);
  const finishMesh = createBox(finishSize, new THREE.Vector3(0, 0, z + 6), 0xfff3b0);
  (finishMesh.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0xffe066);
  (finishMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.35;
  scene.add(finishMesh);
  obstacles.push({ mesh: finishMesh, type: 'finish', halfSize: finishSize.clone().multiplyScalar(0.5) });

  return {
    obstacles,
    startPosition: new THREE.Vector3(0, 1.6, 0),
    finishMesh,
    totalLength: z + 6,
  };
}
