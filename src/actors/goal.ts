import * as ex from 'excalibur';
import { Textures } from '../resources';
import { Vector } from 'excalibur';

export class Goal extends ex.Actor {
    constructor(x: number, y: number, scale: ex.Vector) {
        super({
            pos: new Vector(x, y),
            scale,
        });
        this.body.collider.type = ex.CollisionType.Passive
        const tex = Textures.Goal;
        this.addDrawing(tex);
        this.body.collider.group = ex.CollisionGroupManager.groupByName("furniture");
        this.width = tex.width/2;
        this.height = tex.height/2;
    }

    onInitialize(engine: ex.Engine) {
        this.on('collisionstart', (event: ex.CollisionStartEvent) => {
            const other = event.other as any;
            if (other.inGoal) {
                other.inGoal();
            }
        });
    }
}