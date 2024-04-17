import {Rgb} from "./Rgb";
import {IColor} from "../types/IColor";

export class Rgba extends Rgb implements IColor {
    private _a: number;

    constructor(r: number, g: number, b: number, a: number) {
        super(r, g, b); // invoke the constructor of the parent class : Rgb
        this._a = a;
    }

    toString(): string {
        return `Rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    set a(value: number) {
        this._a = Math.max(0, Math.min(value, 1));
    }

    get a(): number {
        return this._a;
    }
}