/*
    Project Euler problem #7

    10001st prime
    ---------------------------------
    
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    What is the 10 001st prime number?

*/


function isPrime (input: number) : boolean {
    for (let i: number = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

function calculateNthPrime (n: number) : number {
    let countPrime: number = 0;
    let iteration:  number = 2;
    while (countPrime < n) {
        if (isPrime (iteration)) {
            countPrime += 1;
        }
        iteration ++;
    }
    return iteration - 1;
}


let n: number = 10001;
console.time("time");
let nthPrime: number = calculateNthPrime (n);
console.timeEnd("time");
//time: 25.883ms
console.log("The 10001st prime number is: ", nthPrime);
// answer is 104743