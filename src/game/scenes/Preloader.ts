import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        // Create loading bar
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);

        const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            fontFamily: 'Arial',
            fontSize: '20px',
            color: '#ffffff'
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.add.text(width / 2, height / 2, '0%', {
            fontFamily: 'Arial',
            fontSize: '18px',
            color: '#ffffff'
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', (value: number) => {
            percentText.setText(Math.floor(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });

        // Load Mystic Woods grass tileset (16x16 tiles)
        this.load.spritesheet('tiles', 'assets/tiles/mystic-grass.png', {
            frameWidth: 16,
            frameHeight: 16
        });

        // Load Mystic Woods player character (48x48 frames)
        this.load.spritesheet('player', 'assets/sprites/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        // Assets loaded, go directly to HomeScene
        this.scene.start('HomeScene');
    }
}
