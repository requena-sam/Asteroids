export class Random {
    static int(min: number, max:number):number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

// console.log(Random.int(5, 10));

/*
const random = new Random();
console.log(random.int(5, 10));
*/
