// 特效管理器
class EffectsManager {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
        this.trails = [];
        
        this.initParticleSystem();
    }
    
    initParticleSystem() {
        // 创建粒子几何体
        this.particleGeometry = new THREE.BufferGeometry();
        this.particleCount = 100;
        
        const positions = new Float32Array(this.particleCount * 3);
        const velocities = new Float32Array(this.particleCount * 3);
        const lifetimes = new Float32Array(this.particleCount);
        
        this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        this.particleGeometry.setAttribute('lifetime', new THREE.BufferAttribute(lifetimes, 1));
        
        // 粒子材质
        this.particleMaterial = new THREE.PointsMaterial({
            color: 0xffd700,
            size: 0.1,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
        this.scene.add(this.particleSystem);
    }
    
    createCollectEffect(position) {
        // 创建收集特效
        const particleCount = 20;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = position.x;
            positions[i3 + 1] = position.y;
            positions[i3 + 2] = position.z;
            
            velocities.push(new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                Math.random() * 10 + 5,
                (Math.random() - 0.5) * 10
            ));
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            color: 0xffd700,
            size: 0.2,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });
        
        const particles = new THREE.Points(geometry, material);
        this.scene.add(particles);
        
        // 动画粒子
        let life = 1.0;
        const animate = () => {
            life -= 0.02;
            
            if (life <= 0) {
                this.scene.remove(particles);
                return;
            }
            
            const positions = particles.geometry.attributes.position.array;
            
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                const velocity = velocities[i];
                
                positions[i3] += velocity.x * 0.02;
                positions[i3 + 1] += velocity.y * 0.02;
                positions[i3 + 2] += velocity.z * 0.02;
                
                velocity.y -= 0.5; // 重力
            }
            
            particles.geometry.attributes.position.needsUpdate = true;
            material.opacity = life;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    createJumpEffect(position) {
        // 创建跳跃特效
        const ringGeometry = new THREE.RingGeometry(0.5, 1.5, 16);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x4ecdc4,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        });
        
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.position.copy(position);
        ring.rotation.x = -Math.PI / 2;
        this.scene.add(ring);
        
        // 动画环形特效
        let scale = 0.1;
        let opacity = 0.8;
        
        const animate = () => {
            scale += 0.1;
            opacity -= 0.05;
            
            if (opacity <= 0) {
                this.scene.remove(ring);
                return;
            }
            
            ring.scale.set(scale, scale, 1);
            ringMaterial.opacity = opacity;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    createTrail(ballPosition) {
        // 创建小球轨迹特效
        if (this.trails.length > 20) {
            const oldTrail = this.trails.shift();
            this.scene.remove(oldTrail);
        }
        
        const trailGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const trailMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6b6b,
            transparent: true,
            opacity: 0.3
        });
        
        const trail = new THREE.Mesh(trailGeometry, trailMaterial);
        trail.position.copy(ballPosition);
        this.scene.add(trail);
        this.trails.push(trail);
        
        // 淡出轨迹
        let opacity = 0.3;
        const fadeOut = () => {
            opacity -= 0.01;
            if (opacity > 0) {
                trailMaterial.opacity = opacity;
                requestAnimationFrame(fadeOut);
            }
        };
        fadeOut();
    }
    
    createLevelCompleteEffect() {
        // 创建关卡完成特效
        const fireworkCount = 50;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(fireworkCount * 3);
        const velocities = [];
        const colors = new Float32Array(fireworkCount * 3);
        
        for (let i = 0; i < fireworkCount; i++) {
            const i3 = i * 3;
            positions[i3] = 0;
            positions[i3 + 1] = 10;
            positions[i3 + 2] = 0;
            
            velocities.push(new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                Math.random() * 20 + 10,
                (Math.random() - 0.5) * 20
            ));
            
            const color = new THREE.Color();
            color.setHSL(Math.random(), 1.0, 0.5);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.3,
            transparent: true,
            opacity: 1.0,
            vertexColors: true,
            blending: THREE.AdditiveBlending
        });
        
        const fireworks = new THREE.Points(geometry, material);
        this.scene.add(fireworks);
        
        // 动画烟花
        let life = 2.0;
        const animate = () => {
            life -= 0.02;
            
            if (life <= 0) {
                this.scene.remove(fireworks);
                return;
            }
            
            const positions = fireworks.geometry.attributes.position.array;
            
            for (let i = 0; i < fireworkCount; i++) {
                const i3 = i * 3;
                const velocity = velocities[i];
                
                positions[i3] += velocity.x * 0.02;
                positions[i3 + 1] += velocity.y * 0.02;
                positions[i3 + 2] += velocity.z * 0.02;
                
                velocity.y -= 1.0; // 重力
            }
            
            fireworks.geometry.attributes.position.needsUpdate = true;
            material.opacity = life / 2.0;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}

// 导出特效管理器
window.EffectsManager = EffectsManager;