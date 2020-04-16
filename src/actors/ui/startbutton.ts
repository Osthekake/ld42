import * as ex from 'excalibur';
import { UIActor, Vector } from 'excalibur';
import { Level } from '../../levels/level';
import { Startable } from '../startable';
import { Textures } from '../../resources';

export class StartButton extends UIActor implements Startable{
  isRunning: boolean = false;
  isReset: boolean = true;
  label: ex.Label;
    
  constructor(private level: Level){
    super({pos: new Vector(1025, 625)});
    const tex = Textures.Button;
    this.addDrawing(tex);
    this.width = tex.width;
    this.height = tex.height;
        
    this.label = new ex.Label({
      pos: new Vector(tex.width/2, tex.height * 0.55),
      text: 'Ignition!',
      fontFamily: 'Arial',
      fontSize: 20,
      textAlign: ex.TextAlign.Center,
      color: ex.Color.Orange
    });
    this.add(this.label);

    this.on('pointerdown', this.onClick);
  }

  onClick(e: ex.Input.PointerEvent){
    if (this.isRunning) {
      this.stop();
    } else {
        if (this.isReset){
            this.start();
        } else {
            this.reset();
        }
    }
  }


  private stopper;
  start(): void {
    this.isRunning = true;
    this.isReset = false;
    this.label.text = 'Cut engines';
    this.level.start();
    this.stopper = setTimeout(() => this.stop(), 5500);
  }

  stop(): void {
    if (this.stopper) {
      clearTimeout(this.stopper);
    }
    this.stopper = undefined;
    this.isRunning = false;
    this.label.text = 'Reset level';
    this.level.stop();
  }

  reset(){
    this.isReset = true;
    this.label.text = 'Ignition!';
    this.level.reinitializeFurniture();
  }
}