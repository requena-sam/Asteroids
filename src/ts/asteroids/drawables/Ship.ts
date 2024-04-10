import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IColor} from "../../framework/types/IColor";
import {settings} from "../settings";
import {Rgb} from "../../framework/colors/Rgb";
import {KeyController} from "../KeyController";

export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyControler: KeyController;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, canvas.width / 2, canvas.height / 2, settings.ship.width, settings.ship.height, settings.ship.color, false);
        this.canvas = canvas;
        this.keyControler = keyController;
        this.draw()
    }

    update(): void {
        this.y += 2;
        if (this.x - this.width >= this.canvas.width) {
            this.x = -this.width / 2;
        } else if (this.x + this.width / 2 <= 0) {
            this.x = this.canvas.width + this.width / 2;
        } else if (this.y + this.height / 2 <= 0) {
            this.y = this.canvas.height + this.height / 2;
        } else if (this.y - this.height >= this.canvas.height) {
            this.y = -this.height / 2;
        }
    }

}