import * as THREE from 'three';

export type AABB = { min: THREE.Vector3; max: THREE.Vector3 };

export function closestPointOnAABB(point: THREE.Vector3, aabb: AABB, out: THREE.Vector3): THREE.Vector3 {
  out.set(
    THREE.MathUtils.clamp(point.x, aabb.min.x, aabb.max.x),
    THREE.MathUtils.clamp(point.y, aabb.min.y, aabb.max.y),
    THREE.MathUtils.clamp(point.z, aabb.min.z, aabb.max.z),
  );
  return out;
}

export type CollisionResult = {
  collided: boolean;
  normal: THREE.Vector3;
  isGround: boolean;
};

const _tmpClosest = new THREE.Vector3();
const _tmpDelta = new THREE.Vector3();

export function resolveSphereVsAABB(
  center: THREE.Vector3,
  radius: number,
  aabb: AABB,
  velocity: THREE.Vector3,
): CollisionResult {
  closestPointOnAABB(center, aabb, _tmpClosest);
  _tmpDelta.copy(center).sub(_tmpClosest);
  const distSq = _tmpDelta.lengthSq();
  if (distSq >= radius * radius || distSq === 0) {
    return { collided: false, normal: new THREE.Vector3(), isGround: false };
  }

  const dist = Math.sqrt(distSq);
  let normal = _tmpDelta.clone().multiplyScalar(1 / dist);

  // If center is exactly inside or on center line, choose axis of least penetration
  if (!isFinite(normal.x) || !isFinite(normal.y) || !isFinite(normal.z)) {
    const penX = Math.min(Math.abs(center.x - aabb.min.x), Math.abs(aabb.max.x - center.x));
    const penY = Math.min(Math.abs(center.y - aabb.min.y), Math.abs(aabb.max.y - center.y));
    const penZ = Math.min(Math.abs(center.z - aabb.min.z), Math.abs(aabb.max.z - center.z));
    if (penX <= penY && penX <= penZ) normal = new THREE.Vector3(center.x < (aabb.min.x + aabb.max.x) * 0.5 ? -1 : 1, 0, 0);
    else if (penY <= penX && penY <= penZ) normal = new THREE.Vector3(0, center.y < (aabb.min.y + aabb.max.y) * 0.5 ? -1 : 1, 0);
    else normal = new THREE.Vector3(0, 0, center.z < (aabb.min.z + aabb.max.z) * 0.5 ? -1 : 1);
  }

  const penetration = radius - dist;
  center.addScaledVector(normal, penetration + 1e-4);

  // Cancel velocity into the surface
  const vn = velocity.dot(normal);
  if (vn < 0) velocity.addScaledVector(normal, -vn);

  const isGround = normal.y > 0.5;
  return { collided: true, normal: normal.clone(), isGround };
}
