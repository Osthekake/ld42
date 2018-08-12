import * as ex from 'excalibur';
import { Textures } from '../resources';
import { Line, Vector } from 'excalibur';
import { SpeechBubble } from './speechbubble';

export class Rocket extends ex.Actor {

  emitter: ex.ParticleEmitter;
  speech: SpeechBubble;
  readonly emitterOffset = new Vector(50, 0);
  positionGoal: Vector = new Vector(200, 200);
  attitudeGoal: number;

  readonly dAttitude = 0.003;
  readonly thrust = new Vector(-150, 0);
  readonly gravity = new Vector(0, 80);

  constructor() {
    super(100, 100, 110, 50);
    this.scale.setTo(0.3, 0.3);
    this.addDrawing(Textures.Rocket);
    this.collisionType = ex.CollisionType.Active;
  }

  onInitialize(engine: ex.Engine) {
    this.enableCapturePointer = true;
    this.pos.x = 150;
    this.pos.y = 150;
    this.color = new ex.Color(255, 255, 255);
    this.friction = 1;
    this.mass = 1;

    this.emitter = new ex.ParticleEmitter({
      emitterType: ex.EmitterType.Circle, // Shape of emitter nozzle
      radius: 5,
      minVel: 100,
      maxVel: 400,
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

    this.speech = new SpeechBubble('You win!', () => {});
    engine.add(this.speech);
  }

  private calculateAttitudeGoal(){
    const att = this.pos.clone().add(this.positionGoal.clone().scale(-1));
    this.attitudeGoal = att.toAngle();
  }

  private angularAbs(angle: number): number {
    while (angle < 0) {
      angle += Math.PI * 2;
    }
    while (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }
    return angle;
  }

  private adjustAttitude(delta: number) {
    const canAdjust = this.dAttitude * delta;
    if (this.angularAbs(this.rotation - this.attitudeGoal) < canAdjust) {
      this.rotation = this.attitudeGoal;
    } else if (this.angularAbs(this.attitudeGoal - this.rotation) < Math.PI) {
      this.rotation += canAdjust;
    } else {
      this.rotation -= canAdjust;
    }
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    if (engine.input.pointers.primary.isDragging) {
      this.positionGoal = engine.input.pointers.primary.lastPagePos;
    }
    this.calculateAttitudeGoal();
    this.adjustAttitude(delta);
    this.acc = this.thrust.clone().rotate(this.rotation).add(this.gravity);
    this.rotation = this.rotation;

    // keep emitter pointing right
    const rotatedOffset = this.emitterOffset.clone().rotate(this.rotation);
    this.emitter.pos = this.pos.clone().add(rotatedOffset);
    this.emitter.rotation = this.rotation;
    this.emitter.minAngle = this.rotation - 0.2;
    this.emitter.maxAngle = this.rotation + 0.2;
    this.emitter.vel = this.vel;

    // keep speech in right place
    if (this.pos) {
      this.speech.setParentPos(this.pos);
      this.speech.flip = this.pos.x > 1000;
      //const attitudeDeg = this.angularAbs(this.rotation) * 180/Math.PI;
      //this.speech.text = `Attitude: ${attitudeDeg.toFixed(2)}°`;
    }
  }
}