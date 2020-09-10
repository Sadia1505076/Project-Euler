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

function calculateSumOfPrimesBelowN (upperBound: number) : number {
    let summationOfPrimes: number = 5;
    let n:                 number = 1;                 

    while (true) {
        let possiblePrime1: number = 6 * n - 1;
        let possiblePrime2: number = 6 * n + 1;
        if (possiblePrime1 > upperBound && possiblePrime2 > upperBound) break;
        if (isPrime (possiblePrime1) && possiblePrime1 < upperBound) {
            summationOfPrimes += possiblePrime1;
        }
        if (isPrime (possiblePrime2) && possiblePrime2 < upperBound) {
            summationOfPrimes += possiblePrime2;
        }
        n++;
    }

    return summationOfPrimes;
}


let upperBound: number = 2000000;
console.time("time");
let summationOfPrimes: number = calculateSumOfPrimesBelowN (upperBound);
console.timeEnd("time");
console.log("The sum of all the primes below two million is: ", summationOfPrimes);

// Time:       1002.377ms
// Answer:     142913828922