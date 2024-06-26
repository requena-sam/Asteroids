import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        gameID: 'game',
        backgroundID: 'background',
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
        bulletIntervall: 10


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


    },
    asteroid: {
        width: 150,
        height: 150,
        shapes: [
            "M34.2,137.92L1.32,39.84l47.26-7.69L86.6,1.38l25.68,28.85-6.16,24.04,45.21-3.85-2.05,61.54-46.23,6.73-12.33,32.69-56.51-13.46Z",
            "M52.45,151.99L1.36,80.11l63.24-27.73,2.03-50.4,51.77,48.58-5.21,22.64,38.18-3.62-1.74,57.95-39.04,6.34-30.52-19.51-27.61,37.62Z",
            "M34.52,97.72L1.52,56.7l56.57,2.77,6.59-28.15L82.5.97l34.51,21,34.51,40.5-32.83,54.75-18.52,27.75-58.92,6-6.73-53.25Z"

        ],
        smallW: 70,
        smallH: 70,
        smallShapes: [
            "M15.96,64.36L.62,18.59l22.05-3.59L40.41.64l11.99,13.46-2.88,11.22,21.1-1.79-.96,28.72-21.58,3.14-5.75,15.26-26.37-6.28Z",
            "M24.48,70.93L.64,37.39l29.51-12.94.95-23.52,24.16,22.67-2.43,10.56,17.82-1.69-.81,27.04-18.22,2.96-14.24-9.11-12.88,17.56Z",
            "M16.11,45.6L.71,26.46l26.4,1.29,3.07-13.14L38.5.45l16.1,9.8,16.1,18.9-15.32,25.55-8.64,12.95-27.5,2.8-3.14-24.85Z"

        ],
        color: Rgb.white,
        initialAsteroidCount: 4,
        minAcceleration: 2,
        maxAcceleration: 5,
        orientationSpeed: 0.01,
        newAsteroidCount: 3,


    },
    star: {
        width: {
            min: 2,
            max: 5,
        },
        color: Rgb.white,
        initialCount : 30
    }
}