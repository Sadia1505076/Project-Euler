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
    let leftSideSum:    number;
    let rightSideSum:   number;
    let c:              number;
    let sideSum:        number = 1000;

    for (let a: number = 1; a < sideSum / 3; a++) {
        for (let b: number = a + 1; b < (sideSum - 1) / 2; b++) {
                c = 1000 - a - b;
                rightSideSum = calculateSquare (c);
                leftSideSum = calculateSquare (a) + calculateSquare (b);
                if (leftSideSum == rightSideSum) {
                    return a * b * c;
                }
        }
    }
    return 0;
}


console.time("time");
let productOfPythagoreanTriplet: number = calculateProductOfPythagoreanTriplet ();
console.timeEnd("time");
console.log("The product of pythagorean triplet is: ", productOfPythagoreanTriplet);

// Time:       7.195ms
// Answer:     31875000