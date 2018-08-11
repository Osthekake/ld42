import * as ex from 'excalibur';
import { Brick } from '../../actors/brick';
import { Color } from 'excalibur';

export class LevelOne extends ex.Scene {
  public onInitialize(engine: ex.Engine) {
    const width = engine.canvasWidth;
    const height = engine.canvasHeight;
    const leftWall =  new Brick(0,        height/2,   50,     height,   Color.Gray);
    const rightWall = new Brick(width,    height/2,   50,     height,   Color.Gray);
    const floor =     new Brick(width/2,  height,     width,  50,       Color.Vermillion);
    
    this.add(leftWall);
    this.add(rightWall);
    this.add(floor);
  }
  public onActivate() {}
  public onDeactivate() {}
}
