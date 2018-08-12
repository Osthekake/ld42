import * as ex from 'excalibur';
import { Level } from './levels/level';
import { Textures, Levels } from './resources';
import { Physics, CollisionResolutionStrategy } from 'excalibur';

class Game extends ex.Engine {
  constructor() {
    super({ width: 1200, height: 800, displayMode: ex.DisplayMode.Fixed });
    for (let key in Levels) {
      let value = Levels[key];
      const level = new Level(value);
      this.add(key, level);
    }
  }
  
  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

Physics.useRigidBodyPhysics();/*
Physics.collisionResolutionStrategy = CollisionResolutionStrategy.RigidBody;
Physics.enabled = true;
Physics.allowRigidBodyRotation = true;*/
const game = new Game();

let loader = new ex.Loader();
for (let key in Textures) {
  loader.addResource(Textures[key]);
}

game.start(loader).then(() => {
  game.goToScene('Level5');
  
});