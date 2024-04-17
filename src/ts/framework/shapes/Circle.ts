import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";

export class Circle extends Shape {
    private readonly radius: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, radius: number, color: IColor, degree: number, isFilled: boolean = true) {
        super(ctx, position, color, degree, isFilled);
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.fillOrStroke();
    }

    clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);

        if (this.isFilled) {
            this.ctx.clearRect(-this.radius - 1, -this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
        } else {
            this.ctx.clearRect((-this.radius) - 2, (-this.radius) - 2, this.radius * 2 + 4, this.radius * 2 + 4);
        }

        this.ctx.restore();
    }
}