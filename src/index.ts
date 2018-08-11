import * as ex from 'excalibur';
import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { Physics, CollisionResolutionStrategy } from 'excalibur';

class Game extends ex.Engine {
  constructor() {
    super({ width: 1200, height: 800, displayMode: ex.DisplayMode.Fixed });
    const levelOne = new LevelOne();
    const player = new Player();
    
    levelOne.add(player);
    
    this.add('levelOne', levelOne);
    
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
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {
  game.goToScene('levelOne');
});