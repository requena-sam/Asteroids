import {IAnimatable} from "./types/IAnimatable";

export class Animate {
    private iAnimates: IAnimatable[];
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private idxOfElementBeRemoved: number[];

    constructor(canvas?: HTMLCanvasElement, ctx?: CanvasRenderingContext2D) {
        this.iAnimates = [];
        this.idxOfElementBeRemoved = [];
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
        this.iAnimates.forEach((iAnimate, idx: number) => {
            if (iAnimate.shouldBeRemoved) {
                this.idxOfElementBeRemoved.push(idx);
            } else {
                if (this.canvas === undefined || this.ctx === undefined) {
                    iAnimate.clear();
                }
                iAnimate.update();
                iAnimate.draw();
            }

        });
        this.idxOfElementBeRemoved.forEach((idx: number) => {
            this.iAnimates.splice(idx, 1);
        });
        this.idxOfElementBeRemoved.length = 0; //nettoyage du tableau
    }

    registerForAnimation(animatable: IAnimatable) {
        this.iAnimates.push(animatable);
    }
}