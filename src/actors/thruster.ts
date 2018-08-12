import * as ex from 'excalibur';
import { Vector, SpriteSheet } from 'excalibur';
import { vectorDifference } from '../util/util';
import { Startable } from './startable';

export type Attachment = 'linear' | 'radial_clockwise' | 'radial_counterClockwise';
const MAX_ATTACHMENT_RADIUS = 70;

export class Thruster extends ex.Actor implements Startable {

  private emitter: ex.ParticleEmitter;
  readonly emitterOffset;
  readonly thrust = new Vector(-150, 0);

  public isRunning: boolean = false;
  private isDragging: boolean = false;

  constructor(private texture: ex.Texture, private attachment: Attachment = 'linear') {
    super(50, 0, texture.width, texture.height);
    
    this.collisionType = ex.CollisionType.Active;
    
    switch (this.attachment) {
      case 'linear': {
        this.emitterOffset = new Vector(10, 0);
        break;
      }
      case 'radial_clockwise': {
        this.emitterOffset = new Vector(25, -5);
        break;
      }
      case 'radial_counterClockwise': {
        this.emitterOffset = new Vector(25, 5);
        break;
      }
    }
  }

  updateAttachment(placement: Vector) {
    this.pos = placement.clone();
    switch (this.attachment) {
      case 'linear': {
        this.rotation = this.pos.toAngle();
        break;
      }
      case 'radial_clockwise': {
        this.rotation = this.pos.toAngle() + Math.PI/2;
        break;
      }
      case 'radial_counterClockwise': {
        this.rotation = this.pos.toAngle() - Math.PI/2;
        break;
      }
    }
    // console.log('placement radius', placement.magnitude());
    // console.log(this.pos, this.getWidth(), this.getHeight());
  }

  onInitialize(engine: ex.Engine) {
    const spriteSheet = new SpriteSheet(this.texture, 1, 1, this.texture.width, this.texture.height);
    const animation = spriteSheet.getAnimationForAll(engine, 125);
    
    this.addDrawing('idle', animation);
    animation.flipVertical = this.attachment === 'radial_counterClockwise';

    this.enableCapturePointer = true;
    this.on('pointerdown', () => {
      this.isDragging = true;
      engine.input.pointers.primary.once('down', () => {
        //console.log('once down');
        this.isDragging = false;
      });
    });

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
      beginColor: ex.Color.fromRGB(255, 100, 50),
      endColor: ex.Color.fromRGB(240, 240, 0)
    });

    // set emitter settings
    this.emitter.isEmitting = false;  // should the emitter be emitting
    // add the emitter as a child actor, it will draw on top of the parent actor
    // and move with the parent
    engine.add(this.emitter);
  }

  public start(){
    this.isRunning = true;
    this.emitter.isEmitting = true;
  }

  public stop() {
    this.isRunning = false;
    this.emitter.isEmitting = false;
  }

  totalAngle(): number {
    return this.rotation + this.parent.rotation;
  }

  public getThrust(): Vector {
    return this.thrust.clone().rotate(this.totalAngle());
  }

  public getTorque(): number {
    switch (this.attachment) {
      case 'linear': {
        return Math.cos(this.totalAngle()) * -100;
      }
      case 'radial_clockwise': {
        return this.getThrust().magnitude() * this.pos.magnitude() * -1;
      }
      case 'radial_counterClockwise': {
        return this.getThrust().magnitude() * this.pos.magnitude();
      }
    }
    
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    // console.log(this.isDragging);
    
    /*if (engine.input.pointers.primary.lastWorldPos) {
      console.log(engine.input.pointers.primary.isActorUnderPointer(this));
    }*/

    if (this.isRunning) {
      
      // keep emitter pointing correctly
      const offset = this.emitterOffset.rotate(this.rotation).add(this.pos).rotate(this.parent.rotation);
      this.emitter.pos = this.parent.pos.clone().add(offset);
      this.emitter.rotation = this.totalAngle();
      this.emitter.minAngle = this.emitter.rotation - 0.2;
      this.emitter.maxAngle = this.emitter.rotation + 0.2;
      this.emitter.vel = this.vel;
    } else if (this.isDragging){
      
      if (engine.input.pointers.primary.isDragging) {
        const mouse = engine.input.pointers.primary.lastPagePos;
        const center = mouse.add(new Vector(this.getWidth()/-2, this.getHeight()/-2));
        let attachmentVector = vectorDifference(center, this.parent.pos);
        if (attachmentVector.magnitude() > MAX_ATTACHMENT_RADIUS) {
          attachmentVector = attachmentVector.normalize().scale(MAX_ATTACHMENT_RADIUS);
        }
        this.updateAttachment(attachmentVector);
      } else {
        /*engine.input.pointers.primary.update();
        this.isDragging = false;
        console.log('! engine.isDragging');*/
      }
    }
  }
}
