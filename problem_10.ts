/*
    Project Euler problem #10

    Summation of primes
    ---------------------------------
    
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.

*/


function isPrime (input: number) : boolean {
    for (let i: number = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

function calculateSummationOfPrimes (upperBound: number) : number {
    let summationOfPrimes:  number = 5;
    let n:                  number = 1;
    let possiblePrime:      number;                  

    while (true) {
        possiblePrime = 6 * n - 1;
        if (possiblePrime > upperBound) break;
        if (isPrime (possiblePrime)) {
            summationOfPrimes += possiblePrime;
        }
        n++;
    }

    n = 1;
    while (true) {
        possiblePrime = 6 * n + 1;
        if (possiblePrime > upperBound) break;
        if (isPrime (possiblePrime)) {
            summationOfPrimes += possiblePrime;
        }
        n++;
    }
    return summationOfPrimes;
}


let upperBound: number = 2000000;
console.time("time");
let summationOfPrimes: number = calculateSummationOfPrimes (upperBound);
console.timeEnd("time");
console.log("The 10001st prime number is: ", summationOfPrimes);

// Time:       1013.249ms
// Answer:     142913828922