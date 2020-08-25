/*
    Project Euler problem #5

    Smallest multiple
    ---------------------------------
    
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


/*
function isDivisible (input: number, divisibleUpto: number) : boolean {
    for (let i: number = 1; i <= divisibleUpto; i++) {
        if (input % i != 0) return false;
    }
    return true;
}

function calculateUpperBoundForMultiple (divisibleUpto: number) : number {
    let upperBound: number = 1;
    for (let i: number = 1; i <= divisibleUpto; i++) {
        upperBound *= i;
    }
    return upperBound;
}

function calculateSmallestMultiple (divisibleUpto: number) : number {
    let upperBound: number = calculateUpperBoundForMultiple (divisibleUpto);
    for (let i: number = 1; i <= upperBound; i++) {
        if (isDivisible (i, divisibleUpto)) return i; 
    }
    return 0;
}

*/


function calculateGcd (input1: number, input2: number) : number {
    if (input2 == 0) return input1;
    return calculateGcd (input2, input1 % input2);
}

function calculateSmallestMultiple (divisibleUpto: number) : number {
    let smallestMultiple: number = 1;
    for (let i: number = 2; i <= divisibleUpto; i++) {
        let product: number = smallestMultiple * i;
        let gcd:     number = calculateGcd (smallestMultiple, i);
        smallestMultiple    = product / gcd;
    }

    return smallestMultiple;
} 


let divisibleUpto: number = 20;
console.time("time");
let smallestMultiple: number = calculateSmallestMultiple (divisibleUpto);
console.timeEnd("time");
// time: 0.140ms
console.log("The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is: ", smallestMultiple);
// Answer is 232792560