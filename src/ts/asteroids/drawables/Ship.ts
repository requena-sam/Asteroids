import {settings} from "../settings";
import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {KeyController} from "../KeyController";
import {Vector} from "../../framework/Vector";
import {Bullet} from "./Bullet";

export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private readonly speed: Vector;
    private bullets: Bullet[];
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
        this.speed.multiply(settings.ship.friction);
        (this.position as Vector).add(this.speed);
        this.checkEdges();
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

    private checkEdges() {
        if (this.position.y > this.canvas.height + settings.ship.height) {
            this.position.y = -settings.ship.height;
        }
        if (this.position.y < -settings.ship.height) {
            this.position.y = this.canvas.height + settings.ship.height;
        }
        if (this.position.x > this.canvas.width + settings.ship.width) {
            this.position.x = -settings.ship.width;
        }
        if (this.position.x < -settings.ship.width) {
            this.position.x = this.canvas.width + settings.ship.width;
        }
    }
}