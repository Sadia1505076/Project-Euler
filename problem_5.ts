/*
    Project Euler problem #5

    Smallest multiple
    ---------------------------------
    
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


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


let divisibleUpto: number = 20
console.time("time");
let smallestMultiple: number = findSmallestMultiple (divisibleUpto);
console.timeEnd("time");
// time: 3394.120ms
console.log("The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is: ", smallestMultiple);
// Answer is 232792560