import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";
import {Asteroid} from "./drawables/Asteroid";

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
        this.animation = new Animate(this.canvas, this.ctx);
        this.animation.registerForAnimation(this.ship);
        for (let i = 0; i < settings.asteroid.initialAsteroidCount; i++) {
            this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas));
        }
        window.addEventListener('resize', () => {
                this.resizeCanvas();
            }
        );
        this.animation.start();

    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerWidth, window.innerHeight) - 2;
        this.canvas.height = Math.min(window.innerWidth, window.innerHeight) - 2;
    }
}