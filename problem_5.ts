/*
    Project Euler problem #5

    Smallest multiple
    ---------------------------------
    
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


/*
function isDivisible (givenNumber: number, divisibleUpto: number) : boolean {
    for (let i: number = 1; i <= divisibleUpto; i++) {
        if (givenNumber % i != 0) return false;
    }
    return true;
}

function calculateRangeToFindMultiple (divisibleUpto: number) : number {
    let rangeToFindMultiple: number = 1;
    for (let i: number = 1; i <= divisibleUpto; i++) {
        rangeToFindMultiple *= i;
    }
    return rangeToFindMultiple;
}

function findSmallestMultiple (divisibleUpto: number) : number {
    let rangeToFindMultiple: number = calculateRangeToFindMultiple (divisibleUpto);
    for (let i: number = 1; i <= rangeToFindMultiple; i++) {
        if (isDivisible (i, divisibleUpto) == true) return i; 
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
        smallestMultiple = (smallestMultiple * i) / calculateGcd (smallestMultiple, i);
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