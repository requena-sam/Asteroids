import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private animation: Animate;
    private readonly keyController: KeyController;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();

        this.keyController = new KeyController();

        this.ship = new Ship(this.canvas, this.ctx, this.keyController);
        this.ship.clear();

        this.animation = new Animate();
        this.animation.registerForAnimation(this.ship);
        this.animation.start();
        window.addEventListener('resize', () => {
                this.resizeCanvas();
            }
        );
    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerWidth, window.innerHeight) - 2;
        this.canvas.height = Math.min(window.innerWidth, window.innerHeight) - 2;
    }
}