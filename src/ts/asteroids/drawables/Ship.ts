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
        this.degree = 0;
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
                    this.speed.add(Vector.fromAngle(this.degree, settings.ship.speed));
                    break;
                case settings.keys[1]:
                    this.degree += settings.ship.rightRotation;
                    break;
                case settings.keys[2]:
                    this.degree += settings.ship.leftRotation;
                    break;
                case settings.keys[3]:
                    this.speed.multiply(settings.ship.friction);
                    break;
                case settings.keys[4]:
                    this.bulletCounter++;
                    if (this.bulletCounter > settings.ship.bulletIntervall) {
                        this.bulletCounter = 0
                        this.bullets.push(new Bullet(this.ctx, this.position, this.degree, this.speed));
                    }
                    break;
            }
        });
    }

    private checkEdges() {
        if (this.position.x - this.width / 2 >= this.canvas.width) {
            this.position.x = -this.width / 2;
        } else if (this.position.x + this.width / 2 <= 0) {
            this.position.x = this.canvas.width + this.width / 2;
        } else if (this.position.y + this.height / 2 <= 0) {
            this.position.y = this.canvas.height + this.height / 2;
        } else if (this.position.y - this.height / 2 >= this.canvas.height) {
            this.position.y = -this.height / 2;
        }
    }
}