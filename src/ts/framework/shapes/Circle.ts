import {Shape} from "./Shape";
import {IColor} from "../types/IColor";

export class Circle extends Shape {
    private readonly radius: number;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: IColor, isFilled: boolean = true) {
        super(ctx, x, y, color, isFilled);
        this.radius = radius;
    }

    public draw() {
        this.ctx.fillStyle = this.color.toString();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.fillOrStroke();
    }
}