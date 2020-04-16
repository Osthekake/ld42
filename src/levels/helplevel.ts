import * as ex from 'excalibur';
import { Startable } from '../actors/startable';
import { LevelData, Level } from './level';
import { SpeechBubble } from '../actors/speechbubble';
import { Engine } from 'excalibur';

export class HelpLevel extends Level implements Startable{

  constructor(public levelData: LevelData, engine: Engine) {
    super(levelData, engine);
  }
  
  public onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
    
  }

  public onActivate() {
    super.onActivate();

    const goalInfo = new SpeechBubble("move furniture here", () => {
      const thrusterInfo = new SpeechBubble("Drag to orient", () => {
        const launchInfo = new SpeechBubble("Click to launch", () => {}, true);
        launchInfo.setParentPos(this.startButton.pos);
        this.add(launchInfo);
      });
      const furnPos = this.furniture[0].pos;
      thrusterInfo.setParentPos(this.furniture[0].thrusters[0].pos.add(furnPos));
      this.add(thrusterInfo);
    });
    goalInfo.setParentPos(this.goal.pos);
    this.add(goalInfo);
  }

  completed(engine){
    const goalInfo = new SpeechBubble("well done!", () => {});
    goalInfo.setParentPos(this.goal.pos);
    this.add(goalInfo);
    super.completed(engine);
  }
}
