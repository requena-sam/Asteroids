import {Shape} from "./Shape";
import {IColor} from "../types/IColor";

export class Rectangle extends Shape {
    private readonly w: number;
    private readonly h: number;
    private readonly degree: number;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, degree: number, color: IColor, isFilled: boolean = true) {
        super(ctx, x, y, color, isFilled);
        this.w = w;
        this.h = h;
        this.degree = degree;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        this.ctx.rotate(this.degree * Math.PI / 180);
        this.ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);
        this.fillOrStroke();
        this.ctx.restore();
    }
}