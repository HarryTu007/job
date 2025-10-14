// 游戏全局变量
let scene, camera, renderer;
let player, playerVelocity;
let obstacles = [];
let collectibles = [];
let platforms = [];
let checkpoints = [];
let currentCheckpoint = 0;

// 游戏状态
let gameState = 'menu'; // menu, playing, paused, gameover, win
let score = 0;
let lives = 3;
let currentLevel = 1;
let gameTime = 0;
let startTime = 0;

// 控制状态
let keys = {};
let mouseX = 0;
let mouseY = 0;

// 物理常量
const GRAVITY = -0.015;
const JUMP_FORCE = 0.3;
const MOVE_SPEED = 0.15;
const MAX_VELOCITY = 0.5;
const FRICTION = 0.95;

// 游戏设置
const WORLD_SIZE = 200;
const OBSTACLE_COUNT = 30;
const COLLECTIBLE_COUNT = 15;

// 初始化Three.js场景
function initScene() {
    // 创建场景
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x87CEEB, 10, 500);

    // 创建相机
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 10);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('gameCanvas'),
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x87CEEB);

    // 添加光照
    setupLighting();

    // 创建天空盒
    createSkybox();

    // 创建云朵
    createClouds();

    // 窗口大小调整
    window.addEventListener('resize', onWindowResize);
}

// 设置光照
function setupLighting() {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // 方向光（太阳）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 200;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // 半球光
    const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x545454, 0.4);
    scene.add(hemisphereLight);
}

// 创建天空盒
function createSkybox() {
    const skyGeometry = new THREE.SphereGeometry(400, 32, 32);
    const skyMaterial = new THREE.MeshBasicMaterial({
        color: 0x87CEEB,
        side: THREE.BackSide,
        fog: false
    });
    
    // 创建渐变效果
    const skyMesh = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(skyMesh);
}

// 创建云朵
function createClouds() {
    const cloudGroup = new THREE.Group();
    
    for (let i = 0; i < 20; i++) {
        const cloud = new THREE.Group();
        
        // 创建云朵的多个球体
        for (let j = 0; j < 5; j++) {
            const cloudPartGeometry = new THREE.SphereGeometry(
                Math.random() * 3 + 2,
                8,
                8
            );
            const cloudPartMaterial = new THREE.MeshPhongMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            const cloudPart = new THREE.Mesh(cloudPartGeometry, cloudPartMaterial);
            
            cloudPart.position.x = Math.random() * 8 - 4;
            cloudPart.position.y = Math.random() * 2 - 1;
            cloudPart.position.z = Math.random() * 4 - 2;
            
            cloud.add(cloudPart);
        }
        
        cloud.position.x = Math.random() * 400 - 200;
        cloud.position.y = Math.random() * 50 + 30;
        cloud.position.z = Math.random() * 400 - 200;
        cloud.userData = { speed: Math.random() * 0.1 + 0.05 };
        
        cloudGroup.add(cloud);
    }
    
    scene.add(cloudGroup);
    scene.clouds = cloudGroup;
}

// 创建玩家小球
function createPlayer() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 16);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff6b6b,
        emissive: 0xff0000,
        emissiveIntensity: 0.2,
        shininess: 100
    });
    
    player = new THREE.Mesh(geometry, material);
    player.castShadow = true;
    player.receiveShadow = true;
    player.position.set(0, 2, 0);
    
    playerVelocity = new THREE.Vector3(0, 0, 0);
    
    // 添加发光效果
    const glowGeometry = new THREE.SphereGeometry(0.6, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6b6b,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    player.add(glow);
    
    scene.add(player);
}

// 创建关卡
function createLevel(levelNum) {
    // 清除旧关卡
    obstacles.forEach(obj => scene.remove(obj));
    collectibles.forEach(obj => scene.remove(obj));
    platforms.forEach(obj => scene.remove(obj));
    checkpoints.forEach(obj => scene.remove(obj));
    
    obstacles = [];
    collectibles = [];
    platforms = [];
    checkpoints = [];
    
    // 根据关卡创建不同的障碍配置
    switch(levelNum) {
        case 1:
            createLevel1();
            break;
        case 2:
            createLevel2();
            break;
        case 3:
            createLevel3();
            break;
        default:
            createLevel1();
    }
}

// 第一关 - 基础跳跃
function createLevel1() {
    // 创建起始平台
    createPlatform(0, 0, 0, 10, 0.5, 10, 0x4CAF50);
    
    // 创建浮动平台路径
    for (let i = 1; i <= 10; i++) {
        const x = Math.sin(i * 0.5) * 10;
        const y = i * 2;
        const z = -i * 15;
        
        createPlatform(x, y, z, 8, 0.5, 8, 0x2196F3);
        
        // 添加收集物
        if (i % 2 === 0) {
            createCollectible(x, y + 2, z);
        }
        
        // 添加旋转障碍
        if (i % 3 === 0) {
            createRotatingObstacle(x, y + 3, z);
        }
    }
    
    // 创建移动平台
    for (let i = 0; i < 5; i++) {
        createMovingPlatform(
            Math.random() * 20 - 10,
            15 + i * 5,
            -150 - i * 20,
            6, 0.5, 6
        );
    }
    
    // 创建终点平台
    createPlatform(0, 40, -250, 15, 0.5, 15, 0xFFD700);
    
    // 添加终点标志
    createFinishFlag(0, 42, -250);
    
    // 添加检查点
    createCheckpoint(0, 10, -75);
    createCheckpoint(0, 25, -150);
}

// 第二关 - 旋转迷宫
function createLevel2() {
    // 创建起始平台
    createPlatform(0, 0, 0, 10, 0.5, 10, 0x4CAF50);
    
    // 创建旋转环
    for (let i = 1; i <= 8; i++) {
        const radius = 15;
        const angleStep = (Math.PI * 2) / 8;
        
        for (let j = 0; j < 8; j++) {
            const angle = j * angleStep;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius - i * 30;
            const y = i * 5;
            
            const platform = createPlatform(x, y, z, 4, 0.5, 4, 0x9C27B0);
            platform.userData = {
                rotateY: 0.01,
                baseY: y,
                floatAmplitude: 2,
                floatSpeed: 0.02
            };
        }
        
        // 中心收集物
        createCollectible(0, i * 5 + 2, -i * 30, true);
    }
    
    // 创建螺旋上升路径
    for (let i = 0; i < 20; i++) {
        const angle = i * 0.3;
        const x = Math.cos(angle) * 20;
        const z = Math.sin(angle) * 20 - 280;
        const y = 45 + i * 2;
        
        createPlatform(x, y, z, 5, 0.5, 5, 0xE91E63);
        
        if (i % 4 === 0) {
            createSpikeBall(x, y + 4, z);
        }
    }
    
    // 终点
    createPlatform(0, 85, -280, 15, 0.5, 15, 0xFFD700);
    createFinishFlag(0, 87, -280);
    
    // 检查点
    createCheckpoint(0, 20, -120);
    createCheckpoint(0, 55, -280);
}

// 第三关 - 极限挑战
function createLevel3() {
    // 起始平台
    createPlatform(0, 0, 0, 10, 0.5, 10, 0x4CAF50);
    
    // 消失重现平台
    for (let i = 0; i < 15; i++) {
        const platform = createPlatform(
            Math.random() * 40 - 20,
            5 + i * 4,
            -i * 20,
            6, 0.5, 6,
            0xFF5722
        );
        
        platform.userData = {
            disappearing: true,
            timer: 0,
            visibleDuration: 3,
            invisibleDuration: 2
        };
    }
    
    // 激光障碍区
    for (let i = 0; i < 10; i++) {
        createLaserBeam(
            -20 + i * 4,
            30,
            -200,
            40,
            Math.random() * Math.PI
        );
    }
    
    // 风力区域
    createWindZone(-20, 40, -250, 40, 20, 50);
    
    // 弹跳蘑菇
    for (let i = 0; i < 8; i++) {
        createBouncePad(
            Math.random() * 30 - 15,
            50 + i * 3,
            -300 - i * 10
        );
    }
    
    // 最终平台挑战
    const finalY = 80;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ((i + j) % 2 === 0) {
                const platform = createPlatform(
                    -10 + i * 5,
                    finalY,
                    -380 + j * 5,
                    4, 0.5, 4,
                    0x00BCD4
                );
                
                // 部分平台会倾斜
                if (Math.random() > 0.5) {
                    platform.userData = {
                        tilting: true,
                        tiltSpeed: 0.02,
                        maxTilt: 0.3
                    };
                }
            }
        }
    }
    
    // 终点
    createPlatform(0, finalY, -400, 15, 0.5, 15, 0xFFD700);
    createFinishFlag(0, finalY + 2, -400);
    
    // 检查点
    createCheckpoint(0, 25, -100);
    createCheckpoint(0, 50, -250);
    createCheckpoint(0, finalY, -350);
}

// 创建平台
function createPlatform(x, y, z, width, height, depth, color = 0x808080) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({ 
        color: color,
        emissive: color,
        emissiveIntensity: 0.1
    });
    
    const platform = new THREE.Mesh(geometry, material);
    platform.position.set(x, y, z);
    platform.castShadow = true;
    platform.receiveShadow = true;
    platform.userData = { type: 'platform' };
    
    platforms.push(platform);
    scene.add(platform);
    
    return platform;
}

// 创建移动平台
function createMovingPlatform(x, y, z, width, height, depth) {
    const platform = createPlatform(x, y, z, width, height, depth, 0x00BCD4);
    
    platform.userData = {
        type: 'movingPlatform',
        moveSpeed: 0.05,
        moveRange: 10,
        moveDirection: 1,
        baseX: x
    };
    
    return platform;
}

// 创建旋转障碍
function createRotatingObstacle(x, y, z) {
    const group = new THREE.Group();
    
    // 中心轴
    const axisGeometry = new THREE.CylinderGeometry(0.2, 0.2, 4);
    const axisMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const axis = new THREE.Mesh(axisGeometry, axisMaterial);
    group.add(axis);
    
    // 旋转臂
    const armGeometry = new THREE.BoxGeometry(8, 0.5, 0.5);
    const armMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFF0000,
        emissive: 0xFF0000,
        emissiveIntensity: 0.3
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.castShadow = true;
    group.add(arm);
    
    group.position.set(x, y, z);
    group.userData = { 
        type: 'rotatingObstacle',
        rotationSpeed: 0.02
    };
    
    obstacles.push(group);
    scene.add(group);
    
    return group;
}

// 创建尖刺球
function createSpikeBall(x, y, z) {
    const geometry = new THREE.SphereGeometry(1, 8, 6);
    const material = new THREE.MeshPhongMaterial({
        color: 0x800080,
        emissive: 0x400040,
        emissiveIntensity: 0.5
    });
    
    const ball = new THREE.Mesh(geometry, material);
    
    // 添加尖刺
    const spikeGeometry = new THREE.ConeGeometry(0.2, 1, 4);
    const spikeMaterial = new THREE.MeshPhongMaterial({ color: 0x400040 });
    
    for (let i = 0; i < 12; i++) {
        const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        spike.position.x = Math.sin(phi) * Math.cos(theta) * 1;
        spike.position.y = Math.sin(phi) * Math.sin(theta) * 1;
        spike.position.z = Math.cos(phi) * 1;
        
        spike.lookAt(spike.position.clone().multiplyScalar(2));
        ball.add(spike);
    }
    
    ball.position.set(x, y, z);
    ball.userData = {
        type: 'spikeBall',
        floatSpeed: 0.01,
        floatAmplitude: 2,
        baseY: y
    };
    
    obstacles.push(ball);
    scene.add(ball);
    
    return ball;
}

// 创建激光束
function createLaserBeam(x, y, z, length, rotation) {
    const group = new THREE.Group();
    
    // 激光束
    const beamGeometry = new THREE.CylinderGeometry(0.1, 0.1, length);
    const beamMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8
    });
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.rotation.z = Math.PI / 2;
    
    // 发光效果
    const glowGeometry = new THREE.CylinderGeometry(0.3, 0.3, length);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.z = Math.PI / 2;
    
    group.add(beam);
    group.add(glow);
    group.position.set(x, y, z);
    group.rotation.y = rotation;
    
    group.userData = {
        type: 'laser',
        rotationSpeed: 0.01
    };
    
    obstacles.push(group);
    scene.add(group);
    
    return group;
}

// 创建风力区域
function createWindZone(x, y, z, width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({
        color: 0x87CEEB,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
    });
    
    const windZone = new THREE.Mesh(geometry, material);
    windZone.position.set(x, y, z);
    
    windZone.userData = {
        type: 'windZone',
        windForce: new THREE.Vector3(0.01, 0, 0)
    };
    
    // 添加风粒子效果
    const particleCount = 50;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * width;
        positions[i * 3 + 1] = (Math.random() - 0.5) * height;
        positions[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        opacity: 0.6
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    windZone.add(particleSystem);
    
    obstacles.push(windZone);
    scene.add(windZone);
    
    return windZone;
}

// 创建弹跳垫
function createBouncePad(x, y, z) {
    const geometry = new THREE.CylinderGeometry(2, 2.5, 0.5, 8);
    const material = new THREE.MeshPhongMaterial({
        color: 0xFFC107,
        emissive: 0xFFC107,
        emissiveIntensity: 0.3
    });
    
    const pad = new THREE.Mesh(geometry, material);
    pad.position.set(x, y, z);
    pad.castShadow = true;
    pad.receiveShadow = true;
    
    pad.userData = {
        type: 'bouncePad',
        bounceForce: 0.8
    };
    
    platforms.push(pad);
    scene.add(pad);
    
    return pad;
}

// 创建收集物
function createCollectible(x, y, z, isSpecial = false) {
    const geometry = new THREE.OctahedronGeometry(isSpecial ? 1 : 0.5);
    const material = new THREE.MeshPhongMaterial({
        color: isSpecial ? 0xFFD700 : 0xFFC107,
        emissive: isSpecial ? 0xFFD700 : 0xFFC107,
        emissiveIntensity: 0.5,
        shininess: 100
    });
    
    const collectible = new THREE.Mesh(geometry, material);
    collectible.position.set(x, y, z);
    collectible.castShadow = true;
    
    collectible.userData = {
        type: 'collectible',
        value: isSpecial ? 50 : 10,
        collected: false
    };
    
    // 添加发光效果
    const glowGeometry = new THREE.OctahedronGeometry(isSpecial ? 1.2 : 0.6);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: isSpecial ? 0xFFD700 : 0xFFC107,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    collectible.add(glow);
    
    collectibles.push(collectible);
    scene.add(collectible);
    
    return collectible;
}

// 创建检查点
function createCheckpoint(x, y, z) {
    const group = new THREE.Group();
    
    // 检查点旗帜
    const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3);
    const poleMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.y = 1.5;
    group.add(pole);
    
    const flagGeometry = new THREE.PlaneGeometry(2, 1.5);
    const flagMaterial = new THREE.MeshPhongMaterial({
        color: 0x4CAF50,
        side: THREE.DoubleSide,
        emissive: 0x4CAF50,
        emissiveIntensity: 0.2
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(1, 2.5, 0);
    group.add(flag);
    
    // 光环效果
    const ringGeometry = new THREE.TorusGeometry(2, 0.2, 8, 16);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x4CAF50,
        transparent: true,
        opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    
    group.position.set(x, y, z);
    group.userData = {
        type: 'checkpoint',
        reached: false
    };
    
    checkpoints.push(group);
    scene.add(group);
    
    return group;
}

// 创建终点旗帜
function createFinishFlag(x, y, z) {
    const group = new THREE.Group();
    
    // 旗杆
    const poleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 5);
    const poleMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.y = 2.5;
    group.add(pole);
    
    // 旗帜
    const flagGeometry = new THREE.PlaneGeometry(3, 2);
    const flagMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFD700,
        side: THREE.DoubleSide,
        emissive: 0xFFD700,
        emissiveIntensity: 0.3
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(1.5, 4, 0);
    group.add(flag);
    
    // 星星装饰
    const starGeometry = new THREE.ConeGeometry(0.5, 1, 5);
    const starMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFD700,
        emissive: 0xFFD700,
        emissiveIntensity: 0.5
    });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.y = 6;
    star.rotation.z = Math.PI;
    group.add(star);
    
    group.position.set(x, y, z);
    group.userData = {
        type: 'finish'
    };
    
    obstacles.push(group);
    scene.add(group);
    
    return group;
}

// 初始化控制
function initControls() {
    // 键盘控制
    document.addEventListener('keydown', (e) => {
        keys[e.key.toLowerCase()] = true;
        
        // 空格键跳跃
        if (e.key === ' ' && gameState === 'playing') {
            e.preventDefault();
            jump();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keys[e.key.toLowerCase()] = false;
    });
    
    // 鼠标控制
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    // 锁定鼠标
    document.getElementById('gameCanvas').addEventListener('click', () => {
        if (gameState === 'playing') {
            document.getElementById('gameCanvas').requestPointerLock();
        }
    });
    
    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === document.getElementById('gameCanvas')) {
            document.addEventListener('mousemove', onMouseMove);
        } else {
            document.removeEventListener('mousemove', onMouseMove);
        }
    });
}

// 鼠标移动处理
function onMouseMove(e) {
    if (gameState === 'playing') {
        camera.rotation.y -= e.movementX * 0.002;
        camera.rotation.x -= e.movementY * 0.002;
        camera.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, camera.rotation.x));
    }
}

// 跳跃
function jump() {
    // 检查是否在平台上
    if (isOnPlatform()) {
        playerVelocity.y = JUMP_FORCE;
        
        // 弹跳垫额外跳跃力
        const bouncePad = getBouncePad();
        if (bouncePad) {
            playerVelocity.y = bouncePad.userData.bounceForce;
        }
    }
}

// 检查是否在平台上
function isOnPlatform() {
    const playerBox = new THREE.Box3().setFromObject(player);
    
    for (let platform of platforms) {
        const platformBox = new THREE.Box3().setFromObject(platform);
        platformBox.max.y += 0.1; // 增加一点容差
        
        if (playerBox.intersectsBox(platformBox)) {
            // 检查玩家是否在平台上方
            if (player.position.y > platform.position.y) {
                return true;
            }
        }
    }
    
    return false;
}

// 获取弹跳垫
function getBouncePad() {
    for (let platform of platforms) {
        if (platform.userData.type === 'bouncePad') {
            const distance = player.position.distanceTo(platform.position);
            if (distance < 3) {
                return platform;
            }
        }
    }
    return null;
}

// 更新玩家
function updatePlayer() {
    if (gameState !== 'playing') return;
    
    // 应用重力
    if (!isOnPlatform()) {
        playerVelocity.y += GRAVITY;
    } else {
        if (playerVelocity.y < 0) {
            playerVelocity.y = 0;
        }
    }
    
    // 移动控制
    const moveVector = new THREE.Vector3();
    
    if (keys['w'] || keys['arrowup']) {
        moveVector.z -= MOVE_SPEED;
    }
    if (keys['s'] || keys['arrowdown']) {
        moveVector.z += MOVE_SPEED;
    }
    if (keys['a'] || keys['arrowleft']) {
        moveVector.x -= MOVE_SPEED;
    }
    if (keys['d'] || keys['arrowright']) {
        moveVector.x += MOVE_SPEED;
    }
    
    // 应用相机旋转到移动方向
    moveVector.applyQuaternion(camera.quaternion);
    moveVector.y = 0;
    
    playerVelocity.x = moveVector.x;
    playerVelocity.z = moveVector.z;
    
    // 应用摩擦力
    playerVelocity.x *= FRICTION;
    playerVelocity.z *= FRICTION;
    
    // 限制最大速度
    const horizontalVelocity = new THREE.Vector2(playerVelocity.x, playerVelocity.z);
    if (horizontalVelocity.length() > MAX_VELOCITY) {
        horizontalVelocity.normalize().multiplyScalar(MAX_VELOCITY);
        playerVelocity.x = horizontalVelocity.x;
        playerVelocity.z = horizontalVelocity.y;
    }
    
    // 更新位置
    player.position.add(playerVelocity);
    
    // 边界检查
    if (player.position.y < -50) {
        respawn();
    }
    
    // 球体旋转效果
    const rotationAxis = new THREE.Vector3(playerVelocity.z, 0, -playerVelocity.x).normalize();
    const rotationSpeed = horizontalVelocity.length() * 0.1;
    player.rotateOnWorldAxis(rotationAxis, rotationSpeed);
}

// 更新相机
function updateCamera() {
    if (gameState !== 'playing') return;
    
    // 第三人称相机跟随
    const cameraOffset = new THREE.Vector3(0, 5, 10);
    cameraOffset.applyQuaternion(camera.quaternion);
    
    const desiredPosition = player.position.clone().add(cameraOffset);
    camera.position.lerp(desiredPosition, 0.1);
    
    // 相机看向玩家
    const lookAtPosition = player.position.clone();
    lookAtPosition.y += 2;
    camera.lookAt(lookAtPosition);
}

// 更新障碍物
function updateObstacles() {
    obstacles.forEach(obstacle => {
        // 旋转障碍
        if (obstacle.userData.type === 'rotatingObstacle') {
            obstacle.rotation.y += obstacle.userData.rotationSpeed;
        }
        
        // 尖刺球浮动
        if (obstacle.userData.type === 'spikeBall') {
            obstacle.position.y = obstacle.userData.baseY + 
                Math.sin(Date.now() * obstacle.userData.floatSpeed) * 
                obstacle.userData.floatAmplitude;
            obstacle.rotation.x += 0.01;
            obstacle.rotation.y += 0.01;
        }
        
        // 激光旋转
        if (obstacle.userData.type === 'laser') {
            obstacle.rotation.y += obstacle.userData.rotationSpeed;
        }
    });
}

// 更新平台
function updatePlatforms() {
    platforms.forEach(platform => {
        // 移动平台
        if (platform.userData.type === 'movingPlatform') {
            platform.position.x += platform.userData.moveSpeed * platform.userData.moveDirection;
            
            if (Math.abs(platform.position.x - platform.userData.baseX) > platform.userData.moveRange) {
                platform.userData.moveDirection *= -1;
            }
        }
        
        // 浮动平台
        if (platform.userData.floatAmplitude) {
            platform.position.y = platform.userData.baseY +
                Math.sin(Date.now() * platform.userData.floatSpeed) *
                platform.userData.floatAmplitude;
        }
        
        // 旋转平台
        if (platform.userData.rotateY) {
            platform.rotation.y += platform.userData.rotateY;
        }
        
        // 消失平台
        if (platform.userData.disappearing) {
            platform.userData.timer += 0.016; // 假设60fps
            
            const totalCycle = platform.userData.visibleDuration + platform.userData.invisibleDuration;
            const currentPhase = platform.userData.timer % totalCycle;
            
            if (currentPhase < platform.userData.visibleDuration) {
                platform.visible = true;
                // 闪烁警告
                if (currentPhase > platform.userData.visibleDuration - 1) {
                    platform.material.opacity = 0.5 + Math.sin(currentPhase * 10) * 0.5;
                    platform.material.transparent = true;
                }
            } else {
                platform.visible = false;
            }
        }
        
        // 倾斜平台
        if (platform.userData.tilting) {
            platform.rotation.z = Math.sin(Date.now() * platform.userData.tiltSpeed) * platform.userData.maxTilt;
            platform.rotation.x = Math.cos(Date.now() * platform.userData.tiltSpeed) * platform.userData.maxTilt;
        }
    });
}

// 更新收集物
function updateCollectibles() {
    collectibles.forEach(collectible => {
        if (!collectible.userData.collected) {
            // 旋转动画
            collectible.rotation.y += 0.02;
            collectible.rotation.x += 0.01;
            
            // 浮动效果
            collectible.position.y += Math.sin(Date.now() * 0.001) * 0.01;
            
            // 检查碰撞
            const distance = player.position.distanceTo(collectible.position);
            if (distance < 1.5) {
                collectItem(collectible);
            }
        }
    });
}

// 收集物品
function collectItem(item) {
    if (item.userData.collected) return;
    
    item.userData.collected = true;
    score += item.userData.value;
    updateScore();
    
    // 收集动画
    const targetScale = 2;
    const animationDuration = 500;
    const startTime = Date.now();
    
    const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / animationDuration;
        
        if (progress < 1) {
            item.scale.setScalar(1 + progress * targetScale);
            item.material.opacity = 1 - progress;
            item.material.transparent = true;
            requestAnimationFrame(animate);
        } else {
            scene.remove(item);
        }
    };
    
    animate();
    
    // 创建粒子效果
    createCollectParticles(item.position);
}

// 创建收集粒子效果
function createCollectParticles(position) {
    const particleCount = 20;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1);
        const material = new THREE.MeshBasicMaterial({
            color: 0xFFD700,
            transparent: true,
            opacity: 1
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.copy(position);
        particle.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            Math.random() * 0.2,
            (Math.random() - 0.5) * 0.2
        );
        
        particles.push(particle);
        scene.add(particle);
    }
    
    // 动画粒子
    const animateParticles = () => {
        let allDone = true;
        
        particles.forEach(particle => {
            if (particle.material.opacity > 0) {
                particle.position.add(particle.velocity);
                particle.material.opacity -= 0.02;
                particle.scale.multiplyScalar(0.95);
                allDone = false;
            } else {
                scene.remove(particle);
            }
        });
        
        if (!allDone) {
            requestAnimationFrame(animateParticles);
        }
    };
    
    animateParticles();
}

// 碰撞检测
function checkCollisions() {
    if (gameState !== 'playing') return;
    
    const playerBox = new THREE.Box3().setFromObject(player);
    
    // 检查障碍物碰撞
    for (let obstacle of obstacles) {
        if (obstacle.userData.type === 'finish') {
            const distance = player.position.distanceTo(obstacle.position);
            if (distance < 3) {
                winLevel();
                return;
            }
        } else if (obstacle.userData.type === 'windZone') {
            const windBox = new THREE.Box3().setFromObject(obstacle);
            if (playerBox.intersectsBox(windBox)) {
                // 应用风力
                playerVelocity.add(obstacle.userData.windForce);
            }
        } else {
            let obstacleBox;
            
            if (obstacle.userData.type === 'rotatingObstacle') {
                // 旋转障碍的碰撞检测
                obstacle.children.forEach(child => {
                    if (child.geometry) {
                        const childBox = new THREE.Box3().setFromObject(child);
                        if (playerBox.intersectsBox(childBox)) {
                            takeDamage();
                        }
                    }
                });
            } else if (obstacle.userData.type === 'laser') {
                // 激光的碰撞检测
                obstacle.children.forEach(child => {
                    if (child.geometry) {
                        const childBox = new THREE.Box3().setFromObject(child);
                        if (playerBox.intersectsBox(childBox)) {
                            takeDamage();
                        }
                    }
                });
            } else {
                obstacleBox = new THREE.Box3().setFromObject(obstacle);
                if (playerBox.intersectsBox(obstacleBox)) {
                    takeDamage();
                }
            }
        }
    }
    
    // 检查检查点
    checkpoints.forEach((checkpoint, index) => {
        if (!checkpoint.userData.reached) {
            const distance = player.position.distanceTo(checkpoint.position);
            if (distance < 3) {
                checkpoint.userData.reached = true;
                currentCheckpoint = index;
                
                // 改变检查点颜色
                checkpoint.children.forEach(child => {
                    if (child.material) {
                        child.material.color.setHex(0xFFD700);
                        child.material.emissive.setHex(0xFFD700);
                    }
                });
                
                showMessage('检查点已保存！');
            }
        }
    });
}

// 受到伤害
function takeDamage() {
    lives--;
    updateLives();
    
    if (lives <= 0) {
        gameOver();
    } else {
        respawn();
        showMessage(`剩余生命: ${lives}`);
    }
}

// 重生
function respawn() {
    // 重置速度
    playerVelocity.set(0, 0, 0);
    
    // 返回最近的检查点
    if (currentCheckpoint >= 0 && checkpoints[currentCheckpoint]) {
        const checkpoint = checkpoints[currentCheckpoint];
        player.position.copy(checkpoint.position);
        player.position.y += 2;
    } else {
        // 返回起点
        player.position.set(0, 2, 0);
    }
    
    // 重置相机
    camera.position.set(0, 5, 10);
    camera.rotation.set(0, 0, 0);
}

// 显示消息
function showMessage(text) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 24px;
        z-index: 1000;
        pointer-events: none;
    `;
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 2000);
}

// 更新UI
function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateLives() {
    const livesContainer = document.getElementById('lives');
    const lifeElements = livesContainer.querySelectorAll('.life');
    
    lifeElements.forEach((life, index) => {
        if (index >= lives) {
            life.classList.add('lost');
        } else {
            life.classList.remove('lost');
        }
    });
}

function updateTime() {
    if (gameState === 'playing') {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('time').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateLevel() {
    document.getElementById('level').textContent = `Level ${currentLevel}`;
}

function updateProgress() {
    // 计算进度（基于玩家Z位置）
    const totalDistance = 400; // 总距离
    const progress = Math.max(0, Math.min(100, (-player.position.z / totalDistance) * 100));
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// 游戏控制函数
function startGame() {
    document.getElementById('startScreen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('startScreen').style.display = 'none';
    }, 500);
    
    gameState = 'playing';
    score = 0;
    lives = 3;
    currentLevel = 1;
    currentCheckpoint = -1;
    startTime = Date.now();
    
    updateScore();
    updateLives();
    updateLevel();
    
    // 初始化游戏
    initScene();
    createPlayer();
    createLevel(currentLevel);
    initControls();
    
    // 开始游戏循环
    animate();
}

function pauseGame() {
    gameState = 'paused';
}

function resumeGame() {
    gameState = 'playing';
}

function gameOver() {
    gameState = 'gameover';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOverScreen').style.display = 'flex';
    
    // 解锁鼠标
    document.exitPointerLock();
}

function winLevel() {
    gameState = 'win';
    
    // 计算时间奖励
    const timeBonus = Math.max(0, 300 - Math.floor((Date.now() - startTime) / 1000)) * 10;
    score += timeBonus;
    
    document.getElementById('winScore').textContent = score;
    document.getElementById('winScreen').style.display = 'flex';
    
    // 解锁鼠标
    document.exitPointerLock();
}

function restartGame() {
    // 隐藏结束屏幕
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('winScreen').style.display = 'none';
    
    // 重置游戏状态
    gameState = 'playing';
    score = 0;
    lives = 3;
    currentCheckpoint = -1;
    startTime = Date.now();
    
    updateScore();
    updateLives();
    
    // 重置玩家位置
    respawn();
    
    // 重新创建关卡
    createLevel(currentLevel);
}

function nextLevel() {
    document.getElementById('winScreen').style.display = 'none';
    
    currentLevel++;
    if (currentLevel > 3) {
        currentLevel = 1; // 循环关卡
        showMessage('你已经通关所有关卡！从头开始新的挑战！');
    }
    
    gameState = 'playing';
    lives = 3;
    currentCheckpoint = -1;
    startTime = Date.now();
    
    updateLives();
    updateLevel();
    
    // 重置玩家位置
    player.position.set(0, 2, 0);
    playerVelocity.set(0, 0, 0);
    
    // 创建新关卡
    createLevel(currentLevel);
}

// 窗口大小调整
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画云朵
function animateClouds() {
    if (scene.clouds) {
        scene.clouds.children.forEach(cloud => {
            cloud.position.x += cloud.userData.speed;
            
            // 循环云朵
            if (cloud.position.x > 200) {
                cloud.position.x = -200;
            }
        });
    }
}

// 主动画循环
function animate() {
    requestAnimationFrame(animate);
    
    if (gameState === 'playing') {
        updatePlayer();
        updateCamera();
        updateObstacles();
        updatePlatforms();
        updateCollectibles();
        checkCollisions();
        updateTime();
        updateProgress();
    }
    
    animateClouds();
    
    renderer.render(scene, camera);
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    // 等待Three.js加载
    if (typeof THREE !== 'undefined') {
        console.log('游戏已准备就绪！');
    } else {
        console.error('Three.js 加载失败');
    }
});