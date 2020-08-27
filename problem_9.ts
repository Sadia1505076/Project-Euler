/*
    Project Euler problem #9

    Special Pythagorean triplet
    ---------------------------------
    
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
                            a^2 + b^2 = c^2
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.

*/

function calculateSquare (input: number) : number {
    return Math.pow(input, 2);
}

function calculateProductOfPythagoreanTriplet () : number {
    let pythagoreanSum: number;
    let c:              number;

    for (let a: number = 1; a < sideSum / 2; a++) {
        for (let b: number = a + 1; b < (sideSum - 1) / 2; b++) {
                c = 1000 - a - b;
                pythagoreanSum = calculateSquare (a) + calculateSquare (b);
                if (pythagoreanSum == calculateSquare (c)) {
                    return a * b * c;
                }
        }
    }
    return 0;
}


let sideSum: number = 1000;
console.time("time");
let productOfPythagoreanTriplet: number = calculateProductOfPythagoreanTriplet ();
console.timeEnd("time");
console.log("The product of pythagorean triptelt is: ", productOfPythagoreanTriplet);

// Time:       311.260ms
// Answer:     31875000