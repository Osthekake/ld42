import * as ex from 'excalibur';
import { Level } from './levels/level';
import { Textures, Levels, Sounds } from './resources';
import { Physics } from 'excalibur';
import { HelpLevel } from './levels/helplevel';
import { WinLevel } from './levels/winLevel';

class Game extends ex.Engine {
  constructor() {
    super({ width: 1200, height: 800, displayMode: ex.DisplayMode.Fixed });
    for (let key in Levels) {
      let value = Levels[key];
      if (key === "Level1") {
        const level = new HelpLevel(value, this);
        this.add(key, level);
      } else if (key === "Done") {
        const level = new WinLevel(value, this);
        this.add(key, level);
      } else {
        const level = new Level(value, this);
        this.add(key, level);
      }
    }
  }
  
  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

ex.CollisionGroupManager.create("furniture");
ex.CollisionGroupManager.create("walls");

Physics.useRigidBodyPhysics();/*
Physics.collisionResolutionStrategy = CollisionResolutionStrategy.RigidBody;
Physics.enabled = true;
Physics.allowRigidBodyRotation = true;*/
const game = new Game();

let loader = new ex.Loader();
//loader.logo = require('./images/title.png');
for (let key in Textures) {
  loader.addResource(Textures[key]);
}
for (let key in Sounds) {
  loader.addResource(Sounds[key]);
}

game.start(loader).then(() => {
  game.goToScene('Level1');
});