import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";

export class Rectangle extends Shape {
    private readonly w: number;
    private readonly h: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, w: number, h: number, color: IColor, degree: number = 0, isFilled: boolean = true) {
        super(ctx, position, color, degree, isFilled);
        this.w = w;
        this.h = h;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x + this.w / 2, this.position.y + this.h / 2);
        this.ctx.rotate(this.degree * Math.PI / 180);
        this.ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);

        this.fillOrStroke();

        this.ctx.restore();
    }
}