import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        id: 'game',
    },
    ship: {
        width: 20,
        height: 40,
        color: Rgb.white,
        speed: 0.2,
        maxSpeed: 5,
        velocity: {x: 1, y: 2.5},
        leftRotation: -Math.PI / 15,
        rightRotation: Math.PI / 15,
        friction: 0.99,

    },
    keys: [
        'z',
        'd',
        'q',
        's',
        ' '
    ],
    bullet: {
        radius: 2,
        color: Rgb.white,
        speed: 10,


    }
}