import { Scene } from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        // Load any assets needed for the preloader screen here
        // For now, we'll just move to the Preloader scene
    }

    create() {
        this.scene.start('Preloader');
    }
}
