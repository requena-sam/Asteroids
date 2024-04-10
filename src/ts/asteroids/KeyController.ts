import {settings} from "./settings";

export class KeyController {
    public activeKeys: String[];

    constructor() {
        this.activeKeys = [];
        window.addEventListener('keydown', (e) => {
            console.log(this.activeKeys)
            if (settings.keys.includes(e.key) && !this.activeKeys.includes(e.key)) {
                this.activeKeys.push(e.key)
            }
        })
        window.addEventListener('keyup', (e) => {
            if (this.activeKeys.includes(e.key)) {
                this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1)
            }
        })
    }
}