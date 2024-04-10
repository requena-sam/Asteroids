import {IColor} from "../types/IColor";

export abstract class Shape implements IColor {
    protected readonly ctx: CanvasRenderingContext2D;
    protected x: number;
    protected y: number;
    protected color: IColor;
    protected isFilled: boolean;

    protected constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: IColor, isFilled: boolean = true) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
        this.isFilled = isFilled
    }

    protected fillOrStroke() {
        if (this.isFilled) {
            this.ctx.fillStyle = this.color.toString();
            this.ctx.fill()
        } else {
            this.ctx.strokeStyle = this.color.toString();
            this.ctx.stroke()
        }
    }
}