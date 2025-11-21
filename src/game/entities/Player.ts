import { Scene } from 'phaser';

export class Player extends Phaser.Physics.Arcade.Sprite {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private wasd!: {
        up: Phaser.Input.Keyboard.Key;
        down: Phaser.Input.Keyboard.Key;
        left: Phaser.Input.Keyboard.Key;
        right: Phaser.Input.Keyboard.Key;
    };
    private speed = 120;
    private lastDirection = 'down';

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'player', 0);

        // Add to scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Configure sprite
        this.setScale(2); // Scale up 2x for better visibility
        this.setCollideWorldBounds(true);

        // Set up physics body
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setSize(32, 32); // Smaller hitbox than sprite
        body.setOffset(8, 16); // Center the hitbox

        // Set up keyboard input
        this.setupInput();

        // Create animations
        this.createAnimations();

        // Start with idle animation
        this.play('player-idle-down');
    }

    private setupInput() {
        const keyboard = this.scene.input.keyboard;
        if (!keyboard) return;

        this.cursors = keyboard.createCursorKeys();
        this.wasd = {
            up: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
    }

    private createAnimations() {
        const scene = this.scene;

        // IDLE Animations (Rows 0-2) - Animated idle, not static!
        scene.anims.create({
            key: 'player-idle-down',
            frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 5 }), // Row 0
            frameRate: 8,
            repeat: -1
        });

        scene.anims.create({
            key: 'player-idle-right',
            frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 11 }), // Row 1
            frameRate: 8,
            repeat: -1
        });

        scene.anims.create({
            key: 'player-idle-up',
            frames: scene.anims.generateFrameNumbers('player', { start: 12, end: 17 }), // Row 2
            frameRate: 8,
            repeat: -1
        });

        // Idle Left - Reuse Right but flipped
        scene.anims.create({
            key: 'player-idle-left',
            frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 11 }), // Same as idle-right
            frameRate: 8,
            repeat: -1
        });

        // WALK Animations (Rows 3-5) - The actual walking animations!
        scene.anims.create({
            key: 'player-walk-down',
            frames: scene.anims.generateFrameNumbers('player', { start: 18, end: 23 }), // Row 3
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'player-walk-right',
            frames: scene.anims.generateFrameNumbers('player', { start: 24, end: 29 }), // Row 4
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'player-walk-up',
            frames: scene.anims.generateFrameNumbers('player', { start: 30, end: 35 }), // Row 5
            frameRate: 10,
            repeat: -1
        });

        // Walk Left - Reuse Right but flipped
        scene.anims.create({
            key: 'player-walk-left',
            frames: scene.anims.generateFrameNumbers('player', { start: 24, end: 29 }), // Same as walk-right
            frameRate: 10,
            repeat: -1
        });
    }

    update() {
        const body = this.body as Phaser.Physics.Arcade.Body;

        // Reset velocity
        body.setVelocity(0);

        let moving = false;

        // Vertical movement
        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            body.setVelocityY(-this.speed);
            moving = true;
            this.lastDirection = 'up';
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            body.setVelocityY(this.speed);
            moving = true;
            this.lastDirection = 'down';
        }

        // Horizontal movement
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            body.setVelocityX(-this.speed);
            moving = true;
            this.lastDirection = 'left';
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            body.setVelocityX(this.speed);
            moving = true;
            this.lastDirection = 'right';
        }

        // Normalize diagonal movement
        body.velocity.normalize().scale(this.speed);

        // Handle sprite flipping for left/right
        if (this.lastDirection === 'left') {
            this.setFlipX(true); // Flip horizontally for left
        } else if (this.lastDirection === 'right') {
            this.setFlipX(false); // Normal orientation for right
        }

        // Play appropriate animation
        if (moving) {
            this.play(`player-walk-${this.lastDirection}`, true);
        } else {
            this.play(`player-idle-${this.lastDirection}`, true);
        }
    }

    // Public methods for scene to control player
    getSpeed(): number {
        return this.speed;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    getLastDirection(): string {
        return this.lastDirection;
    }
}
