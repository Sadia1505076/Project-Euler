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


function calculateSumOfSquares (upperBound: number) : number {
    let product:      number = upperBound * (upperBound + 1) * (2 * upperBound + 1);
    let sumOfSquares: number = product / 6;
    return sumOfSquares;
}

function calculateSquareOfSum (upperBound: number) : number {
    let product:          number = upperBound * (upperBound + 1);
    let naturalNumberSum: number = product / 2;
    let squareOfSum:      number = Math.pow (naturalNumberSum, 2);
    return squareOfSum;
}

function sumSquareAndSquareSumDifference (upperBound: number) : number {
    let sumOfSquares: number = calculateSumOfSquares (upperBound);
    let squareOfSum:  number = calculateSquareOfSum (upperBound);
    return squareOfSum - sumOfSquares;
}


let upperBound: number = 100;
console.time("time");
let difference: number = sumSquareAndSquareSumDifference (upperBound);
console.timeEnd("time");
//time: 0.422ms
console.log("the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is: ", difference);
// answer is 25164150