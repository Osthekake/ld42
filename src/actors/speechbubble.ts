import * as ex from 'excalibur';
import { Resources } from '../resources';
import { Vector, SpriteSheet, Engine } from 'excalibur';

export class SpeechBubble extends ex.Actor {

  private offset: Vector;
  private label: ex.Label;
  private animation: ex.Animation;
  private parentPos: Vector;

  constructor(text: string, public flip: boolean = false) {
    super();
    
    this.collisionType = ex.CollisionType.PreventCollision;
    
    this.label = new ex.Label(text, 0, 0, 'Arial');
    // properties
    this.label.color = ex.Color.Black;
    this.label.textAlign = ex.TextAlign.Center;
    this.label.fontSize = 40;
    this.label.fontUnit = ex.FontUnit.Px; // pixels are the default
    this.add(this.label);
    
  }   
  set text(text: string) {
    this.label.text = text;
  }

  onInitialize(engine: Engine) {
    const spriteSheet = new SpriteSheet(Resources.SpeechBubble, 1, 1, 1263, 903);
    this.animation = spriteSheet.getAnimationForAll(engine, 125);
    
    this.addDrawing('idle', this.animation);
    this.setHeight(Resources.SpeechBubble.height);
    this.setWidth(Resources.SpeechBubble.width);
    this.animation.scale.setTo(0.4, 0.3);
    this.scale.setTo(0.4, 0.3);
  }

  setParentPos(parentPos: Vector) {
      this.parentPos = parentPos;
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    this.setDrawing('idle');
    this.animation.flipHorizontal = this.flip;
    if (this.flip) {
        this.offset = new Vector(-this.getWidth()/2, this.getHeight() / -2);
    } else{
        this.offset = new Vector(this.getWidth()/2, this.getHeight() / -2);
    }
    this.pos = this.parentPos.clone().add(this.offset);
  }
}
