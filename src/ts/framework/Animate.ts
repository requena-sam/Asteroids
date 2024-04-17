import {IAnimatable} from "./types/IAnimatable";

export class Animate {
    private iAnimates: IAnimatable[];
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        this.iAnimates = [];
        this.canvas = canvas;
        this.ctx = ctx;

    }

    start() {
        this.animate();
    }

    private animate() {
        requestAnimationFrame(this.animate.bind(this)); // il faut binder le this sinon il est undefined
        if (this.canvas !== undefined && this.ctx !== undefined) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
        this.iAnimates.forEach((iAnimate) => {
            if (this.canvas === undefined || this.ctx === undefined){
                iAnimate.clear();
            }
            iAnimate.update();
            iAnimate.draw();
        })
    }

    registerForAnimation(animatable: IAnimatable) {
        this.iAnimates.push(animatable);
    }
}