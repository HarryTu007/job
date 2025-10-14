// 音频管理器
class AudioManager {
    constructor() {
        this.sounds = {};
        this.musicVolume = 0.5;
        this.sfxVolume = 0.7;
        this.isMuted = false;
        
        this.initAudio();
    }
    
    initAudio() {
        // 创建音频上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 创建合成音效
        this.createSynthSounds();
    }
    
    createSynthSounds() {
        // 跳跃音效
        this.sounds.jump = () => this.playTone(220, 0.1, 'sine');
        
        // 收集音效
        this.sounds.collect = () => this.playTone(440, 0.2, 'square');
        
        // 完成关卡音效
        this.sounds.levelComplete = () => {
            this.playTone(330, 0.1, 'sine');
            setTimeout(() => this.playTone(440, 0.1, 'sine'), 100);
            setTimeout(() => this.playTone(550, 0.2, 'sine'), 200);
        };
        
        // 游戏结束音效
        this.sounds.gameOver = () => {
            this.playTone(220, 0.3, 'sawtooth');
            setTimeout(() => this.playTone(110, 0.5, 'sawtooth'), 200);
        };
        
        // 碰撞音效
        this.sounds.hit = () => this.playTone(150, 0.1, 'square');
    }
    
    playTone(frequency, duration, waveType = 'sine') {
        if (this.isMuted) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = waveType;
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.sfxVolume * 0.3, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }
    
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
    
    setVolume(type, volume) {
        if (type === 'music') {
            this.musicVolume = Math.max(0, Math.min(1, volume));
        } else if (type === 'sfx') {
            this.sfxVolume = Math.max(0, Math.min(1, volume));
        }
    }
}

// 导出音频管理器
window.AudioManager = AudioManager;