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

        this.load.on('loaderror', (file: { src: any; }) => {
            console.error('FILE LOAD ERROR:', file.src);
        });

        // Load Tiled map JSON
        this.load.tilemapTiledJSON('world-map', 'assets/maps/world.json');

        // Load tileset images for the map (must match tileset names in Tiled)
        this.load.image('grass', 'assets/tiles/mystic-grass.png');
        this.load.image('objects', 'assets/tiles/mystic-objects.png');

        // Load Mystic Woods player character (48x48 frames)
        this.load.spritesheet('player', 'assets/sprites/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        // This runs ONLY after all files are successfully loaded
        console.log("Preload complete, starting HomeScene");
        this.scene.start('HomeScene');
    }
}
