// 天空小球冒险游戏
class SkyBallGame {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.world = null;
        this.ball = null;
        this.ballBody = null;
        
        // 游戏状态
        this.gameState = 'menu'; // menu, playing, paused, gameOver
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.platforms = [];
        this.obstacles = [];
        this.collectibles = [];
        
        // 控制
        this.keys = {};
        this.mouseX = 0;
        this.mouseY = 0;
        
        // 游戏设置
        this.ballSpeed = 10;
        this.jumpForce = 15;
        this.cameraOffset = new THREE.Vector3(0, 5, 10);
        
        // 音频管理器
        this.audioManager = new AudioManager();
        
        // 特效管理器
        this.effectsManager = null;
        
        this.init();
    }
    
    init() {
        this.setupRenderer();
        this.setupScene();
        this.setupPhysics();
        this.setupCamera();
        this.setupLights();
        this.setupSkybox();
        this.setupControls();
        this.setupUI();
        
        // 初始化特效管理器
        this.effectsManager = new EffectsManager(this.scene);
        
        this.createLevel();
        
        this.animate();
    }
    
    setupRenderer() {
        const canvas = document.getElementById('gameCanvas');
        this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x87CEEB);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        // 处理窗口大小变化
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x87CEEB, 50, 200);
    }
    
    setupPhysics() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -30, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 10, 15);
    }
    
    setupLights() {
        // 环境光
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        // 方向光（太阳光）
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(50, 100, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        this.scene.add(directionalLight);
        
        // 点光源（装饰用）
        const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
        pointLight.position.set(0, 20, 0);
        this.scene.add(pointLight);
    }
    
    setupSkybox() {
        // 创建天空盒
        const skyGeometry = new THREE.SphereGeometry(500, 32, 32);
        const skyMaterial = new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x0077ff) },
                bottomColor: { value: new THREE.Color(0xffffff) },
                offset: { value: 33 },
                exponent: { value: 0.6 }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform float offset;
                uniform float exponent;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition + offset).y;
                    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
                }
            `,
            side: THREE.BackSide
        });
        
        const sky = new THREE.Mesh(skyGeometry, skyMaterial);
        this.scene.add(sky);
        
        // 添加云朵
        this.createClouds();
    }
    
    createClouds() {
        const cloudGeometry = new THREE.SphereGeometry(5, 8, 6);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });
        
        for (let i = 0; i < 20; i++) {
            const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloud.position.set(
                (Math.random() - 0.5) * 200,
                Math.random() * 50 + 30,
                (Math.random() - 0.5) * 200
            );
            cloud.scale.set(
                Math.random() * 2 + 1,
                Math.random() * 0.5 + 0.5,
                Math.random() * 2 + 1
            );
            this.scene.add(cloud);
        }
    }
    
    setupControls() {
        // 键盘事件
        document.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
            
            if (event.code === 'Space') {
                event.preventDefault();
                if (this.gameState === 'playing') {
                    this.jump();
                }
            }
        });
        
        document.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });
        
        // 鼠标事件
        document.addEventListener('mousemove', (event) => {
            this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
    }
    
    setupUI() {
        const startButton = document.getElementById('startButton');
        const restartButton = document.getElementById('restartButton');
        
        startButton.addEventListener('click', () => {
            this.startGame();
        });
        
        restartButton.addEventListener('click', () => {
            this.restartGame();
        });
    }
    
    createBall() {
        // 创建小球几何体和材质
        const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const ballMaterial = new THREE.MeshPhongMaterial({
            color: 0xff6b6b,
            shininess: 100,
            transparent: true,
            opacity: 0.9
        });
        
        this.ball = new THREE.Mesh(ballGeometry, ballMaterial);
        this.ball.castShadow = true;
        this.ball.receiveShadow = true;
        this.scene.add(this.ball);
        
        // 创建物理体
        const ballShape = new CANNON.Sphere(0.5);
        this.ballBody = new CANNON.Body({ mass: 1 });
        this.ballBody.addShape(ballShape);
        this.ballBody.position.set(0, 5, 0);
        this.ballBody.material = new CANNON.Material({ friction: 0.3, restitution: 0.7 });
        this.world.add(this.ballBody);
    }
    
    createLevel() {
        this.clearLevel();
        this.createBall();
        
        // 创建起始平台
        this.createPlatform(0, 0, 0, 10, 1, 10, 0x4ecdc4);
        
        // 根据关卡创建不同的障碍和平台
        switch(this.level) {
            case 1:
                this.createLevel1();
                break;
            case 2:
                this.createLevel2();
                break;
            case 3:
                this.createLevel3();
                break;
            default:
                this.createRandomLevel();
                break;
        }
    }
    
    createLevel1() {
        // 简单的跳跃平台
        this.createPlatform(15, 2, 0, 8, 1, 8, 0x95e1d3);
        this.createPlatform(30, 4, 5, 6, 1, 6, 0x95e1d3);
        this.createPlatform(45, 6, -5, 8, 1, 8, 0x95e1d3);
        
        // 终点平台
        this.createFinishPlatform(60, 8, 0);
        
        // 收集品
        this.createCollectible(15, 5, 0);
        this.createCollectible(30, 7, 5);
        this.createCollectible(45, 9, -5);
    }
    
    createLevel2() {
        // 移动平台和旋转障碍
        this.createPlatform(12, 1, 0, 6, 1, 6, 0x95e1d3);
        this.createMovingPlatform(25, 3, 0, 5, 1, 5);
        this.createPlatform(40, 5, 8, 6, 1, 6, 0x95e1d3);
        this.createRotatingObstacle(28, 6, 0);
        
        // 终点
        this.createFinishPlatform(55, 7, 8);
        
        // 收集品
        this.createCollectible(12, 4, 0);
        this.createCollectible(40, 8, 8);
    }
    
    createLevel3() {
        // 复杂的障碍组合
        this.createPlatform(10, 1, 0, 5, 1, 5, 0x95e1d3);
        this.createPlatform(20, 3, -8, 4, 1, 4, 0x95e1d3);
        this.createMovingPlatform(35, 5, 0, 4, 1, 4);
        this.createPlatform(50, 7, 8, 5, 1, 5, 0x95e1d3);
        
        // 多个旋转障碍
        this.createRotatingObstacle(15, 4, -4);
        this.createRotatingObstacle(30, 6, 4);
        this.createRotatingObstacle(45, 8, 0);
        
        // 终点
        this.createFinishPlatform(65, 9, 8);
        
        // 更多收集品
        this.createCollectible(10, 4, 0);
        this.createCollectible(20, 6, -8);
        this.createCollectible(35, 8, 0);
        this.createCollectible(50, 10, 8);
    }
    
    createRandomLevel() {
        // 程序生成的随机关卡
        let x = 15;
        let y = 2;
        let z = 0;
        
        for (let i = 0; i < 8; i++) {
            const platformSize = Math.random() * 4 + 3;
            this.createPlatform(x, y, z, platformSize, 1, platformSize, 0x95e1d3);
            
            if (Math.random() < 0.3) {
                this.createRotatingObstacle(x, y + 3, z);
            }
            
            if (Math.random() < 0.5) {
                this.createCollectible(x, y + 3, z);
            }
            
            x += Math.random() * 20 + 10;
            y += Math.random() * 4 - 1;
            z += (Math.random() - 0.5) * 20;
        }
        
        this.createFinishPlatform(x, y + 2, z);
    }
    
    createPlatform(x, y, z, width, height, depth, color) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshLambertMaterial({ color: color });
        const platform = new THREE.Mesh(geometry, material);
        
        platform.position.set(x, y, z);
        platform.castShadow = true;
        platform.receiveShadow = true;
        this.scene.add(platform);
        
        // 物理体
        const shape = new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2));
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(shape);
        body.position.set(x, y, z);
        this.world.add(body);
        
        this.platforms.push({ mesh: platform, body: body });
    }
    
    createMovingPlatform(x, y, z, width, height, depth) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshLambertMaterial({ color: 0xffeb3b });
        const platform = new THREE.Mesh(geometry, material);
        
        platform.position.set(x, y, z);
        platform.castShadow = true;
        platform.receiveShadow = true;
        this.scene.add(platform);
        
        // 物理体
        const shape = new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2));
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(shape);
        body.position.set(x, y, z);
        this.world.add(body);
        
        // 添加移动属性
        platform.userData = {
            isMoving: true,
            startY: y,
            moveRange: 4,
            moveSpeed: 0.02
        };
        
        this.platforms.push({ mesh: platform, body: body });
    }
    
    createRotatingObstacle(x, y, z) {
        const geometry = new THREE.BoxGeometry(8, 0.5, 0.5);
        const material = new THREE.MeshLambertMaterial({ color: 0xff5722 });
        const obstacle = new THREE.Mesh(geometry, material);
        
        obstacle.position.set(x, y, z);
        obstacle.castShadow = true;
        this.scene.add(obstacle);
        
        // 物理体
        const shape = new CANNON.Box(new CANNON.Vec3(4, 0.25, 0.25));
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(shape);
        body.position.set(x, y, z);
        this.world.add(body);
        
        obstacle.userData = {
            isRotating: true,
            rotationSpeed: 0.05
        };
        
        this.obstacles.push({ mesh: obstacle, body: body });
    }
    
    createCollectible(x, y, z) {
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshPhongMaterial({
            color: 0xffd700,
            emissive: 0x333300
        });
        const collectible = new THREE.Mesh(geometry, material);
        
        collectible.position.set(x, y, z);
        this.scene.add(collectible);
        
        collectible.userData = {
            isCollectible: true,
            rotationSpeed: 0.1,
            bobSpeed: 0.05,
            startY: y
        };
        
        this.collectibles.push(collectible);
    }
    
    createFinishPlatform(x, y, z) {
        const geometry = new THREE.CylinderGeometry(3, 3, 1, 16);
        const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
        const platform = new THREE.Mesh(geometry, material);
        
        platform.position.set(x, y, z);
        platform.castShadow = true;
        platform.receiveShadow = true;
        this.scene.add(platform);
        
        // 物理体
        const shape = new CANNON.Cylinder(3, 3, 1, 8);
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(shape);
        body.position.set(x, y, z);
        this.world.add(body);
        
        platform.userData = { isFinish: true };
        this.platforms.push({ mesh: platform, body: body });
    }
    
    clearLevel() {
        // 清除所有平台
        this.platforms.forEach(platform => {
            this.scene.remove(platform.mesh);
            this.world.remove(platform.body);
        });
        this.platforms = [];
        
        // 清除所有障碍
        this.obstacles.forEach(obstacle => {
            this.scene.remove(obstacle.mesh);
            this.world.remove(obstacle.body);
        });
        this.obstacles = [];
        
        // 清除所有收集品
        this.collectibles.forEach(collectible => {
            this.scene.remove(collectible);
        });
        this.collectibles = [];
        
        // 清除小球
        if (this.ball) {
            this.scene.remove(this.ball);
            this.world.remove(this.ballBody);
        }
    }
    
    jump() {
        if (this.ballBody && this.ballBody.velocity.y < 1) {
            this.ballBody.velocity.y = this.jumpForce;
            this.audioManager.playSound('jump');
            this.effectsManager.createJumpEffect(this.ball.position);
        }
    }
    
    updateBallMovement() {
        if (!this.ballBody) return;
        
        const force = new CANNON.Vec3();
        
        // WASD 或方向键控制
        if (this.keys['KeyW'] || this.keys['ArrowUp']) {
            force.z -= this.ballSpeed;
        }
        if (this.keys['KeyS'] || this.keys['ArrowDown']) {
            force.z += this.ballSpeed;
        }
        if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
            force.x -= this.ballSpeed;
        }
        if (this.keys['KeyD'] || this.keys['ArrowRight']) {
            force.x += this.ballSpeed;
        }
        
        this.ballBody.force.set(force.x, force.y, force.z);
    }
    
    updateCamera() {
        if (!this.ball) return;
        
        const targetPosition = new THREE.Vector3();
        targetPosition.copy(this.ball.position);
        targetPosition.add(this.cameraOffset);
        
        this.camera.position.lerp(targetPosition, 0.05);
        this.camera.lookAt(this.ball.position);
    }
    
    updateAnimations() {
        const time = Date.now() * 0.001;
        
        // 更新移动平台
        this.platforms.forEach(platform => {
            if (platform.mesh.userData.isMoving) {
                const data = platform.mesh.userData;
                const newY = data.startY + Math.sin(time * data.moveSpeed) * data.moveRange;
                platform.mesh.position.y = newY;
                platform.body.position.y = newY;
            }
        });
        
        // 更新旋转障碍
        this.obstacles.forEach(obstacle => {
            if (obstacle.mesh.userData.isRotating) {
                obstacle.mesh.rotation.y += obstacle.mesh.userData.rotationSpeed;
                obstacle.body.quaternion.copy(obstacle.mesh.quaternion);
            }
        });
        
        // 更新收集品动画
        this.collectibles.forEach(collectible => {
            const data = collectible.userData;
            collectible.rotation.y += data.rotationSpeed;
            collectible.position.y = data.startY + Math.sin(time * data.bobSpeed) * 0.5;
        });
    }
    
    checkCollisions() {
        if (!this.ball) return;
        
        // 检查收集品碰撞
        for (let i = this.collectibles.length - 1; i >= 0; i--) {
            const collectible = this.collectibles[i];
            const distance = this.ball.position.distanceTo(collectible.position);
            
            if (distance < 1) {
                this.effectsManager.createCollectEffect(collectible.position);
                this.scene.remove(collectible);
                this.collectibles.splice(i, 1);
                this.score += 100;
                this.updateHUD();
                this.audioManager.playSound('collect');
            }
        }
        
        // 检查完成平台
        this.platforms.forEach(platform => {
            if (platform.mesh.userData.isFinish) {
                const distance = this.ball.position.distanceTo(platform.mesh.position);
                if (distance < 4) {
                    this.levelComplete();
                }
            }
        });
        
        // 检查是否掉落
        if (this.ball.position.y < -20) {
            this.loseLife();
        }
    }
    
    levelComplete() {
        this.score += 500;
        this.level++;
        this.updateHUD();
        this.audioManager.playSound('levelComplete');
        this.effectsManager.createLevelCompleteEffect();
        
        // 创建下一关
        setTimeout(() => {
            this.createLevel();
        }, 1000);
    }
    
    loseLife() {
        this.lives--;
        this.updateHUD();
        
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            // 重置小球位置
            this.ballBody.position.set(0, 5, 0);
            this.ballBody.velocity.set(0, 0, 0);
        }
    }
    
    gameOver() {
        this.gameState = 'gameOver';
        document.getElementById('gameOver').style.display = 'flex';
        document.getElementById('finalScore').textContent = `最终分数: ${this.score}`;
        document.getElementById('gameHUD').style.display = 'none';
        document.getElementById('instructions').style.display = 'none';
        this.audioManager.playSound('gameOver');
    }
    
    startGame() {
        this.gameState = 'playing';
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gameHUD').style.display = 'block';
        document.getElementById('instructions').style.display = 'block';
        
        this.resetGame();
    }
    
    restartGame() {
        this.gameState = 'playing';
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('gameHUD').style.display = 'block';
        document.getElementById('instructions').style.display = 'block';
        
        this.resetGame();
    }
    
    resetGame() {
        this.level = 1;
        this.score = 0;
        this.lives = 3;
        this.updateHUD();
        this.createLevel();
    }
    
    updateHUD() {
        document.getElementById('levelDisplay').textContent = this.level;
        document.getElementById('scoreDisplay').textContent = this.score;
        document.getElementById('livesDisplay').textContent = this.lives;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.gameState === 'playing') {
            this.updateBallMovement();
            this.world.step(1/60);
            
            // 同步物理体和渲染对象
            if (this.ball && this.ballBody) {
                this.ball.position.copy(this.ballBody.position);
                this.ball.quaternion.copy(this.ballBody.quaternion);
            }
            
            this.updateCamera();
            this.updateAnimations();
            this.checkCollisions();
            
            // 添加小球轨迹特效
            if (this.ball && Math.random() < 0.3) {
                this.effectsManager.createTrail(this.ball.position);
            }
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// 启动游戏
window.addEventListener('load', () => {
    new SkyBallGame();
});