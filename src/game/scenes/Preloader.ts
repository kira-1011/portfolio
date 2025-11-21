import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

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

        // TODO: Load all game assets here
        // Example:
        // this.load.image('player', 'assets/sprites/player.png');
        // this.load.spritesheet('player-walk', 'assets/sprites/player-walk.png', { frameWidth: 32, frameHeight: 32 });
        // this.load.image('tileset', 'assets/tiles/office-tileset.png');
        // this.load.tilemapTiledJSON('home-map', 'assets/maps/home.json');
    }

    create() {
        // Once all assets are loaded, start the home scene
        this.scene.start('HomeScene');
    }
}
