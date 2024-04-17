import {settings} from "../settings";
import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {KeyController} from "../KeyController";
import {Vector} from "../../framework/Vector";
import {Bullet} from "./Bullet";
import {Collision} from "../../framework/helpers/Collision";

export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private readonly speed: Vector;
    public bullets: Bullet[];
    private bulletCounter: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, keyController: KeyController) {
        super(
            ctx,
            new Vector({
                x: canvas.width / 2,
                y: canvas.height / 2
            }),
            settings.ship.width,
            settings.ship.height,
            settings.ship.color,
            0,
            false
        );
        this.bullets = [];
        this.bulletCounter = 0;
        this.canvas = canvas;
        this.keyController = keyController;
        this.orientation = 0;
        this.speed = new Vector({x: 0, y: 0});
        this.draw();
    }

    update(): void {
        this.handleKey();
        Collision.checkEdges(this,this.canvas)
        this.speed.multiply(settings.ship.friction);
        (this.position as Vector).add(this.speed);
        this.bullets.forEach((bullet) => {
            bullet.update();
        })
    }

    draw() {
        super.draw();
        this.bullets.forEach((bullet) => {
            bullet.draw();
        })
    }

    clear() {
        super.clear();
        this.bullets.forEach((bullet) => {
            bullet.clear();
        })
    }

    private handleKey() {
        this.keyController.activeKeys.forEach((key) => {
            switch (key) {
                case settings.keys[0]:
                    this.speed.add(Vector.fromAngle(this.orientation, settings.ship.speed));
                    break;
                case settings.keys[1]:
                    this.orientation += settings.ship.rightRotation;
                    break;
                case settings.keys[2]:
                    this.orientation += settings.ship.leftRotation;
                    break;
                case settings.keys[3]:
                    this.speed.multiply(settings.ship.friction);
                    break;
                case settings.keys[4]:
                    this.bulletCounter++;
                    if (this.bulletCounter > settings.ship.bulletIntervall) {
                        this.bulletCounter = 0
                        this.bullets.push(new Bullet(this.ctx, this.position, this.orientation, this.speed));
                    }
                    break;
            }
        });
    }
}