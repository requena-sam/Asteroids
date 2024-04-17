import {settings} from "../../asteroids/settings";
import {IPosition} from "../types/IPosition";
import {IRectangle} from "../types/IRectangle";

export class Collision {
    static checkEdges(rectangle: IRectangle, canvas: HTMLCanvasElement) {
        if (rectangle.position.y > canvas.height + rectangle.height) {
            rectangle.position.y = -rectangle.height;
        }
        if (rectangle.position.y < -rectangle.height) {
            rectangle.position.y = canvas.height + rectangle.height;
        }
        if (rectangle.position.x > canvas.width + rectangle.width) {
            rectangle.position.x = -rectangle.width;
        }
        if (rectangle.position.x < -rectangle.width) {
            rectangle.position.x = canvas.width + rectangle.width;
        }
    }
}