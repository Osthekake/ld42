import * as ex from 'excalibur';
import { Vector } from 'excalibur';
import { Startable } from './startable';
import { Thruster } from './thruster';

export class Furniture extends ex.Actor implements Startable {
  isRunning: boolean;
 
  readonly gravity = new Vector(0, 80);
  thrusters: Thruster[] = [];
  isInGoal: boolean = false;
  
  constructor(x: number, y: number, texture: ex.Texture) {
    super(x, y, texture.width * 0.8, texture.height * 0.8);
    this.addDrawing(texture);
    this.collisionType = ex.CollisionType.Active;
  }

  onInitialize(engine: ex.Engine) {
    this.color = new ex.Color(255, 255, 255);
    this.friction = 1;
    this.mass = 1;
    this.enableCapturePointer = false;
    this.addCollisionGroup('furniture');
    this.addCollisionGroup('walls');
  }
  
  onPostUpdate(engine: ex.Engine, delta: number) {
    super.onPostUpdate(engine, delta);
    this.torque = 0;
    this.acc = Vector.Zero;
  }

  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta);
    this.acc = this.gravity.clone();
    if (this.isRunning) {
      this.thrusters.forEach(thruster => {
        this.acc = this.acc.add(thruster.getThrust());
        this.torque += thruster.getTorque();
      });
      //console.log(this.acc, this.torque);
    }
  }
  
  addThruster(thruster: Thruster){
    this.add(thruster);
    this.thrusters.push(thruster);
  }

  start(): void {
    this.isRunning = true;
    this.thrusters.forEach((child:any) => {
      child.start()
    });
    this.isInGoal = false;
  }
  stop(): void {
    this.isRunning = false;
    this.thrusters.forEach((child:any) => {
      child.stop()
    });
  }

  inGoal(){
    if (!this.isInGoal) {
      this.isInGoal = true;
      setTimeout(() => {
        this.stop();
        this.kill();
        console.log('gone')
      }, 1000);
      console.log('in goal!')
    }
  }
}
