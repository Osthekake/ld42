import * as ex from 'excalibur';
import { Textures } from '../resources';

export class Goal extends ex.Actor {
    constructor(x: number, y: number, scale: ex.Vector) {
        super({
            x, y, scale,
            collisionType: ex.CollisionType.Passive,
        });
        const tex = Textures.Goal;
        this.addDrawing(tex);
        this.addCollisionGroup('furniture');
        this.setWidth(tex.width/2);
        this.setHeight(tex.height/2);
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