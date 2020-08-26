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


function calculateProductOfPythagoreanTriplet (input: number) : number {
    let sideSum:        number;
    let pythagoreanSum: number;

    for (let a: number = 1; a < 333; a++) {
        for (let b: number = a + 1; b < 499; b++) {
            for (let c: number = b + 1; c < 997; c++) {
                sideSum = a + b + c;
                pythagoreanSum = Math.pow(a, 2) + Math.pow(b, 2);

                if (sideSum == input && pythagoreanSum == Math.pow(c, 2)) {
                    return a * b * c;
                }
            }
        }
    }
    return 0;
}


let sideSum: number = 1000;
console.time("time");
let productOfPythagoreanTriplet: number = calculateProductOfPythagoreanTriplet (sideSum);
console.timeEnd("time");
console.log("The prodict of pythagorean triptelt is: ", productOfPythagoreanTriplet);

// Time:       311.260ms
// Answer:     31875000