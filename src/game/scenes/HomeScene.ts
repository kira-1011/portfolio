import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import { Player } from '../entities/Player';

export class HomeScene extends Scene {
    private player!: Player;
    private map!: Phaser.Tilemaps.Tilemap;

    constructor() {
        super('HomeScene');
    }

    create() {
        this.map = this.make.tilemap({ key: 'world-map' });

        // Add Tilesets (Ensure keys match)
        const grassTiles = this.map.addTilesetImage('grass', 'grass');
        const objectTiles = this.map.addTilesetImage('objects', 'objects');
        // Note: If you used 'walls' or 'plains' in Tiled, load them here too!

        if (!grassTiles || !objectTiles) {
            console.error("Tilesets missing!");
            return;
        }

        // Create Layers
        const groundLayer = this.map.createLayer('Ground', [grassTiles, objectTiles], 0, 0);
        
        // *** COLLISION LOGIC STARTS HERE ***
        const decorationLayer = this.map.createLayer('Decorations', [grassTiles, objectTiles], 0, 0);
        
        // 1. Enable collision for any tile that has collision shapes drawn in Tiled
        decorationLayer?.setCollisionFromCollisionGroup();

        // Find Spawn Point
        const spawnPoint = this.map.findObject("Objects", obj => obj.name === "Spawn Point");
        const startX = spawnPoint ? spawnPoint.x! : 200;
        const startY = spawnPoint ? spawnPoint.y! : 200;

        // Create Player
        this.player = new Player(this, startX, startY);
        
        // 2. Add Collider
        // This tells Phaser Physics engine: "Stop 'player' when it hits 'decorationLayer'"
        this.physics.add.collider(this.player, decorationLayer!);

        // Camera
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        // (Optional) Debug Graphics - Uncomment to see the collision boxes!
        /*
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        decorationLayer?.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        });
        */

        EventBus.emit('current-scene-ready', this);
    }

    update() {
        if (this.player) {
            this.player.update();
        }
    }
}
