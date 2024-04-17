import {IColor} from "../types/IColor";

export class Hsl implements IColor {
    private _h: number;
    private _s: number;
    private _l: number;

    constructor(h: number, s: number, l: number) {
        this._h = h;
        this._s = s;
        this._l = l;
    }

    toString(): string {
        return `Hsl(${this.h}, ${this.s}%, ${this.l}%)`; // we remove the underscore everywhere when we add setters and getters
    }

    set h(value: number) {
        this._h = Math.max(0, Math.min(value, 360));
    }

    set s(value: number) {
        this._s = Math.max(0, Math.min(value, 100));
    }

    set l(value: number) {
        this._l = Math.max(0, Math.min(value, 100));
    }

    get h(): number { // without the get, we can't access the value of 'h' in the main.ts file
        return this._h;
    }

    get s(): number {
        return this._s;
    }

    get l(): number {
        return this._l;
    }
}