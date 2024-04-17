import {settings} from "./settings";

export class KeyController {
    public activeKeys: string[];

    constructor() {
        this.activeKeys = [];

        // Key down
        window.addEventListener('keydown', (e) => {
            if (settings.keys.includes(e.key) && !this.activeKeys.includes(e.key)) {
                this.activeKeys.push(e.key);
            }
        });

        // Key Up
        window.addEventListener('keyup', (e) => {
            if (this.activeKeys.includes(e.key)) {
                // console.log(this.activeKeys);
                this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1);
            }
        });
    }
}