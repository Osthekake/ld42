import * as ex from 'excalibur';

export class Brick extends ex.Actor {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
        this.body.collider.friction = 1;
        this.body.collider.type = ex.CollisionType.Fixed;
    }

}