import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private ship: Ship;
    private animation: Animate;
    private keyController: KeyController;

    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas()
        window.addEventListener('resize', (e) => {
            this.resizeCanvas();
        });
        this.keyController = new KeyController()
        this.ship = new Ship(this.ctx, this.canvas, this.keyController)
        this.ship.clear()
        this.animation = new Animate();
        this.animation.registerForAnimation(this.ship);
        this.animation.start();

    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerHeight, window.innerWidth) - 2;
        this.canvas.height = Math.min(window.innerHeight, window.innerWidth) - 2;
    }

}