import {Rectangle} from "../../framework/shapes/Rectangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {Vector} from "../../framework/Vector";
import {Random} from "../../framework/helpers/Random";
import {settings} from "../settings";
import {Collision} from "../../framework/helpers/Collision";
import {Ship} from "./Ship";
import {Rgb} from "../../framework/colors/Rgb";
import {Animate} from "../../framework/Animate";

export class Asteroid extends Rectangle implements IAnimatable {
    private path: Path2D;
    private speed: Vector;
    private acceleration: Vector;
    private canvas: HTMLCanvasElement;
    private ship: Ship;
    private animation: Animate;
    private parent: Asteroid;
    shouldBeRemoved: boolean;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, ship: Ship, animation: Animate, parent?: Asteroid) {
        super(ctx,
            parent ? new Vector({
                    x: parent.position.x,
                    y: parent.position.y,
                }) :
                new Vector({
                    x: Random.int(0, canvas.width),
                    y: Random.int(0, canvas.height)
                }),
            parent ? settings.asteroid.smallW : settings.asteroid.width,
            parent ? settings.asteroid.smallH : settings.asteroid.height,
            settings.asteroid.color,
            Random.float(0, 2 * Math.PI));
        this.path = parent ? new Path2D(settings.asteroid.smallShapes[Random.int(0, settings.asteroid.smallShapes.length - 1)]) :
            new Path2D(settings.asteroid.shapes[Random.int(0, settings.asteroid.shapes.length - 1)]);
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.orientation, Random.int(settings.asteroid.minAcceleration, settings.asteroid.maxAcceleration));
        this.speed.add(this.acceleration);
        this.canvas = canvas;
        this.ship = ship;
        this.animation = animation;
        this.parent = parent
        this.shouldBeRemoved = false
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }

    clear(): void {
    }

    update(): void {
        (this.position as Vector).add(this.speed);
        this.orientation += settings.asteroid.orientationSpeed;
        Collision.checkEdges(this, this.canvas);
        this.checkCollisionWithBullet();
    }

    checkCollisionWithBullet() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.translate(-this.width / 2, -this.height / 2);
        this.ship.bullets.forEach((bullet) => {
            if (this.ctx.isPointInPath(this.path, bullet.position.x, bullet.position.y)) {
                this.shouldBeRemoved = true
                if (!this.parent) {
                    this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas, this.ship, this.animation, this))
                }
            }
        })
        this.ctx.restore();
    }


}