import { AUTO, Game, Types } from 'phaser';
import { Boot } from './scenes/Boot';
import { Preloader } from './scenes/Preloader';

const config: Types.Core.GameConfig = {
    type: AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    backgroundColor: '#00fff0',
    pixelArt: true, // Important for crisp pixel art
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: [
        Boot,
        Preloader
    ],
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
