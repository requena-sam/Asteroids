import {IAnimatable} from "../../framework/types/IAnimatable";
import {Circle} from "../../framework/shapes/Circle";
import {IPosition} from "../../framework/types/IPosition";
import {IColor} from "../../framework/types/IColor";
import {Vector} from "../../framework/Vector";
import {settings} from "../settings";

export class Bullet extends Circle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: Vector;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, degree: number, speed: Vector) {
        super(ctx, new Vector(position), settings.bullet.radius, settings.bullet.color, degree);
        this.speed = new Vector(speed);
        this.update()
    }

    update() {
        this.speed.add(Vector.fromAngle(this.orientation, settings.bullet.speed));
        (this.position as Vector).add(this.speed);
    }
}