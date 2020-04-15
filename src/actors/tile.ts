import * as ex from 'excalibur';
import { Color, SpriteSheet } from 'excalibur';
export class Tile extends ex.Actor {

    topLeft: ex.Sprite;
    topMiddle: ex.Sprite;
    topRight: ex.Sprite;
    middleLeft: ex.Sprite;
    middle: ex.Sprite;
    middleRight: ex.Sprite;
    bottomLeft: ex.Sprite;
    bottomMiddle: ex.Sprite;
    bottomRight: ex.Sprite;

    constructor(x, y, width, height, public tileSet: ex.Texture) {
        super(x, y, width, height, Color.DarkGray);

        this.friction = 1;
        this.collisionType = ex.CollisionType.Fixed;
        const spriteSheet = new SpriteSheet(this.tileSet, 3, 3, 50, 50);
        this.topLeft = spriteSheet.getSprite(0);
        this.topMiddle = spriteSheet.getSprite(1);
        this.topRight = spriteSheet.getSprite(2);

        this.middleLeft = spriteSheet.getSprite(3);
        this.middle = spriteSheet.getSprite(4);
        this.middleRight = spriteSheet.getSprite(5);
        
        this.bottomLeft = spriteSheet.getSprite(6);
        this.bottomMiddle = spriteSheet.getSprite(7);
        this.bottomRight = spriteSheet.getSprite(8);

        this.addCollisionGroup('walls');
    }

    draw(ctx: CanvasRenderingContext2D, delta: number){
        const startX = this.pos.x + this.getWidth()/-2;
        const startY = this.pos.y + this.getHeight()/-2;
        const endX = this.pos.x + this.getWidth()/2;
        const endY = this.pos.y + this.getHeight()/2;
        for (let x = startX; x < endX; x += 50) {
            for (let y = startY; y < endY; y += 50) {
                let sprite: ex.Sprite;
                if (y === startY) {
                    if (x === startX) {
                        sprite = this.topLeft;
                    } else if (x >= endX-50) {
                        sprite = this.topRight;
                    } else {
                        sprite = this.topMiddle;
                    }
                } else if (y >= endY-50) {
                    if (x === startX) {
                        sprite = this.bottomLeft;
                    } else if (x >= endX-50) {
                        sprite = this.bottomRight;
                    } else {
                        sprite = this.bottomMiddle;
                    }
                } else {
                    if (x === startX) {
                        sprite = this.middleLeft;
                    } else if (x >= endX-50) {
                        sprite = this.middleRight;
                    } else {
                        sprite = this.middle;
                    }
                }
                sprite.draw(ctx, x, y);
            }
        }
    }
}