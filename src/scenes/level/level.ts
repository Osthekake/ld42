import * as ex from 'excalibur';
import { Brick } from '../../actors/brick';
import { Color, Actor, Vector } from 'excalibur';
import { Tile } from '../../actors/tile';
import { Textures } from '../../resources';
import { Furniture } from '../../actors/furniture';
import { WSASYSCALLFAILURE } from 'constants';
import { Thruster } from '../../actors/thruster';
import { StartButton } from '../../actors/ui/startbutton';
import { Startable } from '../../actors/startable';
import { Goal } from './goal';

export interface LevelData{
  walls: {
    tile: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }[];

  furniture?: {
    texture: string;
    x: number;
    y: number;
  }[];

  boosters?: string[];
  goal: {
    x: number;
    y: number;
    scale: number;
  }

  next: string;
}

export class Level extends ex.Scene implements Startable{
  isRunning: boolean = false;

  private tiles: Tile[] = [];
  private furniture: Furniture[] = [];
  private goal: Goal;
  private startButton: StartButton;

  constructor(private levelData: LevelData) {
    super();
  }
  
  public onInitialize(engine: ex.Engine) {
    const width = engine.canvasWidth;
    const height = engine.canvasHeight;
    
    const background = new Actor({
      x: width/2,
      y: height/2,
      collisionType: ex.CollisionType.PreventCollision
    });
    background.addDrawing(Textures.Background);
    this.add(background);

    // dynamic objects
    this.levelData.walls.forEach(wall => {
      const t = new Tile(wall.x*50, wall.y*50, wall.width*50, wall.height*50, Textures[wall.tile]);
      this.tiles.push(t);
      this.add(t);
    });

    this.loadFurniture();

    // UI
    this.startButton = new StartButton(this);
    this.add(this.startButton);
    this.goal = new Goal(this.levelData.goal.x*50, this.levelData.goal.y*50, new Vector(this.levelData.goal.scale, this.levelData.goal.scale));
    this.add(this.goal);
  }
  public onActivate() {
    this.reinitializeFurniture();
    this.isRunning = false;
    this.startButton.isReset = true;
    this.startButton.isRunning = false;
  }
  public onDeactivate() {
    this.isRunning = false;
    this.startButton.reset();
  }

  loadFurniture(){
    this.levelData.furniture.forEach(furnitureItem => {
      const t = new Furniture(furnitureItem.x*50, furnitureItem.y*50, Textures[furnitureItem.texture]);
      this.furniture.push(t);
      this.add(t);
    });
    this.furniture[0].addThruster(new Thruster(Textures.SmallThruster));
  }

  reinitializeFurniture(){
    this.furniture.forEach((furnitureItem) => {
      this.remove(furnitureItem);
      furnitureItem.kill();
    });
    this.furniture = [];
    this.loadFurniture();
    
  }
  
  start(): void {
    this.furniture.forEach(element => element.start()); 
    this.isRunning = true;
  }
  stop(): void {
    this.furniture.forEach(element => element.stop());
    this.isRunning = false; 
  }
  update(engine, delta){
    super.update(engine, delta)
    if (this.furniture.every(f => f.isInGoal)){
      console.log('level complete');
      engine.goToScene(this.levelData.next);
    }
  }
}
