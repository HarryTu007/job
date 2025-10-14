class SkyBallGame {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.ball = null;
        this.obstacles = [];
        this.stars = [];
        this.platforms = [];
        this.keys = {};
        this.gameState = 'start'; // start, playing, gameOver
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.ballVelocity = new THREE.Vector3(0, 0, 0);
        this.ballOnGround = false;
        this.gravity = -0.02;
        this.jumpForce = 0.4;
        this.moveSpeed = 0.1;
        this.gameSpeed = 1;
        this.lastObstacleTime = 0;
        this.obstacleInterval = 3000; // 3秒生成一个障碍物
        
        this.init();
    }

    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLighting();
        this.setupControls();
        this.setupUI();
        this.animate();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // 天空蓝
        this.scene.fog = new THREE.Fog(0x87CEEB, 50, 200);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 5, 10);
        this.camera.lookAt(0, 0, 0);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.getElementById('gameContainer').appendChild(this.renderer.domElement);
    }

    setupLighting() {
        // 环境光
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        // 方向光（太阳光）
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -20;
        directionalLight.shadow.camera.right = 20;
        directionalLight.shadow.camera.top = 20;
        directionalLight.shadow.camera.bottom = -20;
        this.scene.add(directionalLight);
    }

    setupControls() {
        document.addEventListener('keydown', (event) => {
            this.keys[event.code] = true;
            if (event.code === 'Space') {
                event.preventDefault();
                this.jump();
            }
            if (event.code === 'KeyR') {
                this.restart();
            }
        });

        document.addEventListener('keyup', (event) => {
            this.keys[event.code] = false;
        });

        // 窗口大小调整
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    setupUI() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });

        document.getElementById('restartBtn').addEventListener('click', () => {
            this.restart();
        });
    }

    createBall() {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0xff6b6b,
            shininess: 100
        });
        this.ball = new THREE.Mesh(geometry, material);
        this.ball.position.set(0, 1, 0);
        this.ball.castShadow = true;
        this.scene.add(this.ball);
    }

    createPlatforms() {
        // 创建多个平台
        for (let i = 0; i < 20; i++) {
            const geometry = new THREE.BoxGeometry(4, 0.5, 4);
            const material = new THREE.MeshPhongMaterial({ 
                color: 0x4ecdc4,
                transparent: true,
                opacity: 0.8
            });
            const platform = new THREE.Mesh(geometry, material);
            platform.position.set(
                (Math.random() - 0.5) * 20,
                Math.random() * 2,
                -i * 8 - 10
            );
            platform.receiveShadow = true;
            this.platforms.push(platform);
            this.scene.add(platform);
        }
    }

    createObstacle() {
        const obstacleTypes = ['spike', 'wall', 'rotating'];
        const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
        
        let obstacle;
        
        switch (type) {
            case 'spike':
                const spikeGeometry = new THREE.ConeGeometry(0.3, 1, 8);
                const spikeMaterial = new THREE.MeshPhongMaterial({ color: 0xff4757 });
                obstacle = new THREE.Mesh(spikeGeometry, spikeMaterial);
                break;
                
            case 'wall':
                const wallGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
                const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x2f3542 });
                obstacle = new THREE.Mesh(wallGeometry, wallMaterial);
                break;
                
            case 'rotating':
                const rotatingGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 8);
                const rotatingMaterial = new THREE.MeshPhongMaterial({ color: 0xffa502 });
                obstacle = new THREE.Mesh(rotatingGeometry, rotatingMaterial);
                obstacle.userData = { rotating: true };
                break;
        }
        
        obstacle.position.set(
            (Math.random() - 0.5) * 15,
            1,
            -50 - Math.random() * 20
        );
        obstacle.castShadow = true;
        this.obstacles.push(obstacle);
        this.scene.add(obstacle);
    }

    createStar() {
        const geometry = new THREE.StarGeometry(0.3, 0.1, 5);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0xffd700,
            emissive: 0xffd700,
            emissiveIntensity: 0.3
        });
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
            (Math.random() - 0.5) * 15,
            2 + Math.random() * 3,
            -30 - Math.random() * 40
        );
        star.userData = { rotating: true, collected: false };
        this.stars.push(star);
        this.scene.add(star);
    }

    createClouds() {
        for (let i = 0; i < 10; i++) {
            const cloudGeometry = new THREE.SphereGeometry(1 + Math.random() * 2, 8, 6);
            const cloudMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xffffff,
                transparent: true,
                opacity: 0.6
            });
            const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloud.position.set(
                (Math.random() - 0.5) * 50,
                5 + Math.random() * 10,
                -Math.random() * 100
            );
            cloud.scale.set(1, 0.5, 1);
            this.scene.add(cloud);
        }
    }

    jump() {
        if (this.ballOnGround && this.gameState === 'playing') {
            this.ballVelocity.y = this.jumpForce;
            this.ballOnGround = false;
        }
    }

    handleInput() {
        if (this.gameState !== 'playing') return;

        const moveSpeed = this.moveSpeed;
        
        if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
            this.ballVelocity.x = -moveSpeed;
        } else if (this.keys['KeyD'] || this.keys['ArrowRight']) {
            this.ballVelocity.x = moveSpeed;
        } else {
            this.ballVelocity.x *= 0.8; // 摩擦力
        }

        if (this.keys['KeyW'] || this.keys['ArrowUp']) {
            this.ballVelocity.z = -moveSpeed;
        } else if (this.keys['KeyS'] || this.keys['ArrowDown']) {
            this.ballVelocity.z = moveSpeed;
        } else {
            this.ballVelocity.z *= 0.8; // 摩擦力
        }
    }

    updatePhysics() {
        if (this.gameState !== 'playing') return;

        // 应用重力
        this.ballVelocity.y += this.gravity;

        // 更新小球位置
        this.ball.position.add(this.ballVelocity);

        // 检查地面碰撞
        this.ballOnGround = false;
        for (let platform of this.platforms) {
            const distance = this.ball.position.distanceTo(platform.position);
            if (distance < 2.5 && this.ball.position.y <= platform.position.y + 0.5) {
                this.ball.position.y = platform.position.y + 0.5;
                this.ballVelocity.y = 0;
                this.ballOnGround = true;
                break;
            }
        }

        // 边界检查
        if (this.ball.position.x > 10) this.ball.position.x = 10;
        if (this.ball.position.x < -10) this.ball.position.x = -10;

        // 相机跟随
        this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, this.ball.position.x * 0.3, 0.1);
        this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, this.ball.position.z + 10, 0.1);
    }

    checkCollisions() {
        if (this.gameState !== 'playing') return;

        // 检查障碍物碰撞
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obstacle = this.obstacles[i];
            const distance = this.ball.position.distanceTo(obstacle.position);
            
            if (distance < 1) {
                this.loseLife();
                this.obstacles.splice(i, 1);
                this.scene.remove(obstacle);
            }
        }

        // 检查星星收集
        for (let i = this.stars.length - 1; i >= 0; i--) {
            const star = this.stars[i];
            if (star.userData.collected) continue;
            
            const distance = this.ball.position.distanceTo(star.position);
            
            if (distance < 1) {
                star.userData.collected = true;
                this.score += 10;
                this.updateUI();
                this.scene.remove(star);
                this.stars.splice(i, 1);
            }
        }
    }

    loseLife() {
        this.lives--;
        this.updateUI();
        
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            // 重置小球位置
            this.ball.position.set(0, 1, 0);
            this.ballVelocity.set(0, 0, 0);
        }
    }

    updateObstacles() {
        if (this.gameState !== 'playing') return;

        const currentTime = Date.now();
        if (currentTime - this.lastObstacleTime > this.obstacleInterval) {
            this.createObstacle();
            this.createStar();
            this.lastObstacleTime = currentTime;
        }

        // 更新障碍物
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obstacle = this.obstacles[i];
            obstacle.position.z += this.gameSpeed;
            
            // 旋转障碍物
            if (obstacle.userData.rotating) {
                obstacle.rotation.y += 0.05;
            }
            
            // 移除远距离障碍物
            if (obstacle.position.z > 20) {
                this.obstacles.splice(i, 1);
                this.scene.remove(obstacle);
            }
        }

        // 更新星星
        for (let i = this.stars.length - 1; i >= 0; i--) {
            const star = this.stars[i];
            if (star.userData.collected) continue;
            
            star.position.z += this.gameSpeed;
            star.rotation.y += 0.1;
            star.rotation.x += 0.05;
            
            // 移除远距离星星
            if (star.position.z > 20) {
                this.stars.splice(i, 1);
                this.scene.remove(star);
            }
        }
    }

    updateUI() {
        document.getElementById('scoreValue').textContent = this.score;
        document.getElementById('livesValue').textContent = this.lives;
        document.getElementById('levelValue').textContent = this.level;
    }

    startGame() {
        this.gameState = 'playing';
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        
        // 隐藏开始屏幕
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameOver').classList.add('hidden');
        
        // 创建游戏对象
        this.createBall();
        this.createPlatforms();
        this.createClouds();
        
        // 创建初始障碍物和星星
        for (let i = 0; i < 5; i++) {
            this.createObstacle();
            this.createStar();
        }
        
        this.updateUI();
    }

    gameOver() {
        this.gameState = 'gameOver';
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('gameOver').classList.remove('hidden');
    }

    restart() {
        // 清理场景
        this.scene.clear();
        this.obstacles = [];
        this.stars = [];
        this.platforms = [];
        this.ball = null;
        
        // 重新设置场景
        this.setupScene();
        this.setupLighting();
        
        // 重置游戏状态
        this.gameState = 'start';
        this.ballVelocity.set(0, 0, 0);
        this.ballOnGround = false;
        
        // 显示开始屏幕
        document.getElementById('startScreen').classList.remove('hidden');
        document.getElementById('gameOver').classList.add('hidden');
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.handleInput();
        this.updatePhysics();
        this.checkCollisions();
        this.updateObstacles();
        
        this.renderer.render(this.scene, this.camera);
    }
}

// 自定义星形几何体
THREE.StarGeometry = function(outerRadius, innerRadius, points) {
    THREE.BufferGeometry.call(this);
    
    const vertices = [];
    const indices = [];
    
    // 中心点
    vertices.push(0, 0, 0);
    
    // 外圈点
    for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        vertices.push(x, y, 0);
    }
    
    // 创建三角形
    for (let i = 1; i <= points * 2; i++) {
        const next = i === points * 2 ? 1 : i + 1;
        indices.push(0, i, next);
    }
    
    this.setIndex(indices);
    this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    this.computeVertexNormals();
};

THREE.StarGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.StarGeometry.prototype.constructor = THREE.StarGeometry;

// 启动游戏
window.addEventListener('load', () => {
    new SkyBallGame();
});