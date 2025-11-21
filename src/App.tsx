import { useRef, useState } from 'react';
import { PhaserGame } from './PhaserGame';
import type { IRefPhaserGame } from './PhaserGame';

function App() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [currentScene, setCurrentScene] = useState<string>('');

  // This callback is invoked when a scene is ready
  const handleSceneReady = (scene: Phaser.Scene) => {
    setCurrentScene(scene.scene.key);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <PhaserGame ref={phaserRef} currentActiveScene={handleSceneReady} />

      {/* Scene indicator */}
      <div className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded">
        Current Scene: {currentScene || 'Loading...'}
      </div>
    </div>
  );
}

export default App;
