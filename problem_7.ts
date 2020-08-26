/*
    Project Euler problem #7

    10001st prime
    ---------------------------------
    
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    What is the 10001st prime number?

*/


function isPrime (input: number) : boolean {
    for (let i: number = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }
    return true;
}

function calculateNthPrime (n: number) : number {
    if (n == 1) return 2;
    if (n == 2) return 3;
    
    let countPrime: number = 2;
    let iteration:  number = 1;
    let nthprime:   number;
    let a:          number; // I didn't know how to name a and b.
    let b:          number;
    let isAPrime:   boolean;
    let isBPrime:   boolean;

    while (countPrime < n) {
        a = 6 * iteration - 1;
        b = 6 * iteration + 1;
        isAPrime = isPrime (a);
        isBPrime = isPrime (b);
        if (isAPrime && isBPrime) {
            if (countPrime + 1 == n) {
                return Math.min(a, b);
            }
            else {
                nthPrime = Math.max(a, b);
                countPrime += 2;
            }
        }
        else if (isAPrime) {
            nthPrime = a;
            countPrime += 1;
        }
        else if (isBPrime){
            nthPrime = b;
            countPrime += 1;
        }
        iteration ++;
    }

    return nthPrime;
}


let n: number = 10001;
console.time("time");
let nthPrime: number = calculateNthPrime (n);
console.timeEnd("time");
console.log("The 10001st prime number is: ", nthPrime);

// Time:       25.883ms
// Answer:     104743
// Time after: 25.217ms