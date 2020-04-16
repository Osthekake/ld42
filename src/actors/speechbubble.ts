import * as ex from 'excalibur';
import { Textures } from '../resources';
import { Vector, SpriteSheet, Engine } from 'excalibur';

export class SpeechBubble extends ex.Actor {

  private offset: Vector;
  private label: ex.Label;
  private animation: ex.Animation;
  private parentPos: Vector;

  constructor(text: string, private doneFn?: () => void, public flip: boolean = false) {
    super();
    
    this.body.collider.type = ex.CollisionType.PreventCollision;
    
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
  get text() {
    return this.label.text;
  }

  onInitialize(engine: Engine) {
    const spriteSheet = new SpriteSheet(Textures.SpeechBubble, 1, 1, Textures.SpeechBubble.width, Textures.SpeechBubble.height);
    this.animation = spriteSheet.getAnimationForAll(engine, 125);
    
    this.addDrawing('idle', this.animation);
    this.height = Textures.SpeechBubble.height;
    this.width = Textures.SpeechBubble.width;
    this.animation.scale.setTo(0.4, 0.3);
    //this.z = 100;
    this.scale.setTo(0.4, 0.3);

    if (this.doneFn){
      setTimeout(() => {
        this.doneFn();
        this.kill();
      }, 5000);
    }
  }

  setParentPos(parentPos: Vector) {
      this.parentPos = parentPos;
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    this.setDrawing('idle');
    this.animation.flipHorizontal = this.flip;
    if (this.flip) {
        this.offset = new Vector(-this.width/2, this.height / -2);
    } else{
        this.offset = new Vector(this.width/2, this.height / -2);
    }
    this.pos = this.parentPos.clone().add(this.offset);
  }
}
