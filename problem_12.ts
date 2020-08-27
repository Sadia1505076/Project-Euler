/*
    Project Euler problem #12

    Highly divisible triangular number
    ---------------------------------
    
    The sequence of triangle numbers is generated by adding the natural numbers. 
    So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
                1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
    Let us list the factors of the first seven triangle numbers:

            1: 1
            3: 1,3
            6: 1,2,3,6
            10: 1,2,5,10
            15: 1,3,5,15
            21: 1,3,7,21
            28: 1,2,4,7,14,28

    We can see that 28 is the first triangle number to have over five divisors.
    What is the value of the first triangle number to have over five hundred divisors?

*/


function calcTotalDivisors (input: number) : number {
    let totalDivisors: number = 0;
    for (let i: number = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            totalDivisors += 2;
        }
    }
    return totalDivisors + 2;
}

function calcHighlyDivisibleTriangularNo (minDivisors: number) : number {
    let nextTriangularNo:  number = 1;
    let totalDivisorsOfNo: number = 1;
    let iteration:         number = 2;   
    
    while (totalDivisorsOfNo <= minDivisors) {
        nextTriangularNo += iteration;        
        totalDivisorsOfNo = calcTotalDivisors (nextTriangularNo);
        iteration++;
    }
    return nextTriangularNo;
}


let minDivisors: number = 500;
console.time("time");
let highlyDivisibleTriangularNo: number = calcHighlyDivisibleTriangularNo (minDivisors);
console.timeEnd("time");
console.log("The value of the first triangle number to have over five hundred divisors is: ", highlyDivisibleTriangularNo);

// Time:       500.135ms
// Answer:     76576500