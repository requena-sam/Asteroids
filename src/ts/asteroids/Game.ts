import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "../framework/Animate";
import {KeyController} from "./KeyController";
import {Asteroid} from "./drawables/Asteroid";

export class Game {
    private readonly gameCanvas: HTMLCanvasElement;
    private readonly gameCtx: CanvasRenderingContext2D;
    private backgroundCanvas: HTMLCanvasElement;
    private backgroundCtx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private animation: Animate;
    private readonly keyController: KeyController;

    constructor() {
        this.gameCanvas = document.getElementById(settings.canvas.gameID) as HTMLCanvasElement;
        this.gameCtx = this.gameCanvas.getContext('2d');

        this.backgroundCanvas = document.getElementById(settings.canvas.backgroundID) as HTMLCanvasElement;
        this.backgroundCtx = this.backgroundCanvas.getContext('2d');

        this.resizeCanvas();

        this.keyController = new KeyController();

        this.ship = new Ship(this.gameCanvas, this.gameCtx, this.keyController);
        this.animation = new Animate(this.gameCanvas, this.gameCtx);
        this.animation.registerForAnimation(this.ship);
        for (let i = 0; i < settings.asteroid.initialAsteroidCount; i++) {
            this.animation.registerForAnimation(new Asteroid(this.gameCtx, this.gameCanvas, this.ship, this.animation));
        }
        window.addEventListener('resize', () => {
                this.resizeCanvas();
            }
        );
        this.animation.start();

    }

    private resizeCanvas() {
        this.gameCanvas.width = Math.min(window.innerWidth, window.innerHeight) - 2;
        this.gameCanvas.height = Math.min(window.innerWidth, window.innerHeight) - 2;
        this.backgroundCanvas.width = Math.min(window.innerWidth, window.innerHeight) - 2;
        this.backgroundCanvas.height = Math.min(window.innerWidth, window.innerHeight) - 2;
    }
}