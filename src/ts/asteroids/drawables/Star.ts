import {Rectangle} from "../../framework/shapes/Rectangle";
import {Random} from "../../framework/helpers/Random";
import {settings} from "../settings";

export class Star extends Rectangle {

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(
            ctx,
            {
                x: Random.int(0, canvas.width),
                y: Random.int(0, canvas.height),
            },
            0,
            0,
            settings.star.color,
            Math.PI / 2,
            true);
        const side = Random.int(settings.star.width.min, settings.star.width.max);
        this.width = side;
        this.height = side;
    }
}