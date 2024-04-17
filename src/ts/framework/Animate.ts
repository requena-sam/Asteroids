import {IAnimatable} from "./types/IAnimatable";

export class Animate {
    private iAnimates: IAnimatable[];

    constructor() {
        this.iAnimates = [];
    }

    start() {
        this.animate();
    }

    private animate() {
        this.iAnimates.forEach((iAnimate) => {
            iAnimate.clear();
            iAnimate.update();
            iAnimate.draw();
        })
        requestAnimationFrame(this.animate.bind(this)); // il faut binder le this sinon il est undefined
    }

    registerForAnimation(animatable: IAnimatable) {
        this.iAnimates.push(animatable);
    }
}