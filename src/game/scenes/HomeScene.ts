import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import { Player } from '../entities/Player';

export class HomeScene extends Scene {
    private tileSize = 16;
    private player!: Player;

    constructor() {
        super('HomeScene');
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Calculate how many tiles fit on screen
        const tilesX = Math.ceil(width / this.tileSize);
        const tilesY = Math.ceil(height / this.tileSize);

        // Draw ground tiles (grass pattern)
        this.createTileBackground(tilesX, tilesY);

        // Create player at center
        this.player = new Player(this, width / 2, height / 2);

        EventBus.emit('current-scene-ready', this);
    }

    update() {
        // Update player
        if (this.player) {
            this.player.update();
        }
    }

    createTileBackground(tilesX: number, tilesY: number) {
        // Create a grass background using Mystic Woods tiles
        for (let y = 0; y < tilesY; y++) {
            for (let x = 0; x < tilesX; x++) {
                // Use varied grass tiles for natural look
                // Frames 0-3 are usually plain grass variants in Mystic Woods
                const random = Math.random();
                let tileFrame = 0;

                if (random > 0.85) {
                    tileFrame = 1; // Slight grass variation
                } else if (random > 0.70) {
                    tileFrame = 2; // Another variation
                } else if (random > 0.60) {
                    tileFrame = 3; // Small detail variant
                }

                this.add.image(
                    x * this.tileSize + this.tileSize / 2,
                    y * this.tileSize + this.tileSize / 2,
                    'tiles',
                    tileFrame
                ).setDisplaySize(this.tileSize, this.tileSize);
            }
        }
    }
}
