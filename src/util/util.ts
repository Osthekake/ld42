import { Vector } from "../../node_modules/excalibur";

export function vectorDifference(a: Vector, b: Vector): Vector {
    const dX = a.x - b.x;
    const dY = a.y - b.y;
    return new Vector(dX, dY);
}