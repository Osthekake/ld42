import * as ex from 'excalibur';
import { Resources } from '../../resources';
import { Line, Vector } from 'excalibur';

export class Player extends ex.Actor {

  emitter: ex.ParticleEmitter;
  readonly emitterOffset = new Vector(0, 20);

  constructor() {
    super();
        
    this.addDrawing(Resources.Sword);
  }
  
  onInitialize(engine: ex.Engine) {
    this.enableCapturePointer = true;
    this.setWidth(25);
    this.setHeight(25);
    this.pos.x = 150;
    this.pos.y = 150;
    this.color = new ex.Color(255, 255, 255);


    this.emitter = new ex.ParticleEmitter({
      emitterType: ex.EmitterType.Circle, // Shape of emitter nozzle
      radius: 5,
      minVel: 100,
      maxVel: 200,
      minAngle: 0.3 * Math.PI,
      maxAngle: 0.7 * Math.PI,
      emitRate: 300, // 300 particles/second
      opacity: 0.5,
      fadeFlag: true, // fade particles overtime
      particleLife: 1000, // in milliseconds = 1 sec
      maxSize: 10, // in pixels
      minSize: 1,
      beginColor: ex.Color.Red,
      endColor: ex.Color.Yellow
    });
    
    // set emitter settings
    this.emitter.isEmitting = true;  // should the emitter be emitting
    // add the emitter as a child actor, it will draw on top of the parent actor
    // and move with the parent
    engine.add(this.emitter);

    var label = new ex.Label('Hello World', 0, -20, '10px Arial');
    // properties
    label.fontFamily = 'Arial';
    label.fontSize = 10;
    label.fontUnit = ex.FontUnit.Px; // pixels are the default
    label.color = ex.Color.White;
    label.textAlign = ex.TextAlign.Center;
    this.add(label);
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    if (engine.input.pointers.primary.isDragging) {
      const goTo = engine.input.pointers.primary.lastPagePos;
      this.pos = goTo;
      this.emitter.pos = goTo.clone().add(this.emitterOffset);
    }
  }
}
