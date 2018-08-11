import * as ex from 'excalibur';

export class Brick extends ex.Actor {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
        this.friction = 1;
        this.collisionType = ex.CollisionType.Fixed;
    }

}