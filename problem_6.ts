/*
    Project Euler problem #6

    Sum square difference
    ---------------------------------
    
    The sum of the squares of the first ten natural numbers is,
        1^2 + 2^2 + 3^2 + ......... + 10^2 = 385
    The square of the sum of the first ten natural numbers is,
        (1 + 2 + 3 + ....... + 10)^2 = 55^2 = 3025
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is,
        3025 - 385 = 2640

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/


function calculateSumOfSquares (n: number) : number {
    let product:      number = n * (n + 1) * (2 * n + 1);
    let sumOfSquares: number = product / 6;
    return sumOfSquares;
}

function calculateSquareOfSum (n: number) : number {
    let product:          number = n * (n + 1);
    let naturalNumberSum: number = product / 2;
    let squareOfSum:      number = Math.pow (naturalNumberSum, 2);
    return squareOfSum;
}

function calcSumSquareAndSquareSumDifference (n: number) : number {
    let sumOfSquares: number = calculateSumOfSquares (n);
    let squareOfSum:  number = calculateSquareOfSum (n);
    return squareOfSum - sumOfSquares;
}


let upperBound: number = 100;
console.time("time");
let difference: number = calcSumSquareAndSquareSumDifference (upperBound);
console.timeEnd("time");
console.log("the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is: ", difference);

// Time:   0.422ms
// Answer: 25164150