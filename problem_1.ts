/*
    Project Euler problem #1

    Multiples of 3 and 5
    ---------------------------------
    
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.

*/


function calculateSumOfMultiple3Or5() : number {
    let sumOfMultiple: number = 0;
    for (let i: number = 1; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sumOfMultiple += i;
        }
    }
    return sumOfMultiple;
}


// let t0                  = performance.now()
console.time("time");
let sumOfMultiple: number = calculateSumOfMultiple3Or5();
console.timeEnd("time");
// let t1                  = performance.now()
// default 0.251ms

console.log("Sum of multiple of 3 or 5 below 1000 is: ", sumOfMultiple); // Answer is 233168
// console.log("Call to the function took " + (t1 - t0) + " milliseconds.")