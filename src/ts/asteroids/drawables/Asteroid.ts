import {Rectangle} from "../../framework/shapes/Rectangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IPosition} from "../../framework/types/IPosition";
import {IColor} from "../../framework/types/IColor";
import {Vector} from "../../framework/Vector";
import {Random} from "../../framework/helpers/Random";
import {settings} from "../settings";

export class Asteroid extends Rectangle implements IAnimatable {
    private path: Path2D;
    private speed: Vector;
    private acceleration: Vector;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, new Vector({
                x: Random.int(0, canvas.width),
                y: Random.int(0, canvas.height)
            }),
            settings.asteroid.width,
            settings.asteroid.height,
            settings.asteroid.color,
            Random.float(0, 2 * Math.PI));
        this.path = new Path2D(settings.asteroid.shapes[Random.int(0, settings.asteroid.shapes.length - 1)]);
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.orientation, Random.int(settings.asteroid.minAcceleration, settings.asteroid.maxAcceleration));
        this.speed.add(this.acceleration);
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x + this.w / 2, this.position.y + this.h / 2);
        this.ctx.rotate(this.orientation);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }

    clear(): void {
    }

    update(): void {
        (this.position as Vector).add(this.speed);
    }

}