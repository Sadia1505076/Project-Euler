/*
    Project Euler problem #3

    Largest prime factor
    -----------------------------

    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?

*/ 


function isPrime (input: number) : boolean {
    for (let i: number = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) return false;
    }

    return true;
}

function calculateLargestPrimeFactor (portionLeftToFactorize: number) : number {    
    let primeFactors: Array<number> = [];
    for (let i: number = 2 ; i < portionLeftToFactorize ; i++) {
        if (isPrime(portionLeftToFactorize)) {
            primeFactors.push(portionLeftToFactorize);
            break;
        }

        if (portionLeftToFactorize % i == 0 && isPrime(i)) {
            primeFactors.push(i);
            portionLeftToFactorize /= i;
            i = 1;
        }

    }
    return Math.max(...primeFactors);
}


let input: number = 600851475143;  
console.time("time");  
let largestPrimeFactor: number = calculateLargestPrimeFactor (input); 
console.timeEnd("time");
// time: 39.085ms
console.log ("The largest prime factor of ", input, " is: ", largestPrimeFactor); // Answer is 6857
