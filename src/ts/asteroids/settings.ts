import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        id: 'game',
    },
    ship: {
        //color: Rgb.white,
        width: 20,
        height: 40,
        speed: 0.2,
        maxSpeed: 5,
        velocity: {x: 1, y: 2.5},
        leftRotation: -Math.PI / 15,
        right: Math.PI / 15,
        color: Rgb.white,

    },
    keys: ['z',
        'd',
        'q',
        's',
        ' '
    ],
    bullet: {
        radius: 2,
    }

}