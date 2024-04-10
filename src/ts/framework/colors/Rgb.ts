import {IColor} from "../types/IColor";

export class Rgb implements IColor {
    private _r: number;
    private _g: number;
    private _b: number;
    public static white = new Rgb(255, 255, 255);

    constructor(r: number, g: number, b: number) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    toString(): string {
        return `Rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    set r(value: number) {
        this._r = Math.max(0, Math.min(value, 255));
    }

    set g(value: number) {
        this._g = Math.max(0, Math.min(value, 255));
    }

    set b(value: number) {
        this._b = Math.max(0, Math.min(value, 255));
    }

    get r(): number {
        return this._r;
    }

    get g(): number {
        return this._g;
    }

    get b(): number {
        return this._b;
    }
}

