import * as ex from 'excalibur';
import { Startable } from '../actors/startable';
import { LevelData, Level } from './level';
import { SpeechBubble } from '../actors/speechbubble';
import { Vector } from 'excalibur';
import { Rocket } from '../actors/rocket';


export class WinLevel extends Level implements Startable{

  constructor(public levelData: LevelData) {
    super(levelData);
  }
  
  public onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
    
    this.add(new Rocket())
  }

  public onActivate() {
    super.onActivate();

  }


  completed(engine){
    const goalInfo = new SpeechBubble("well done!");
    goalInfo.setParentPos(this.goal.pos);
    this.add(goalInfo);
  }
}
