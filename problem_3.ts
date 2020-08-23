/*
    Project Euler problem #3

    Largest prime factor
    -----------------------------

    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?

*/ 


function isPrimeNumber (givenNumber: number) : boolean {
    for (let i: number = 2 ; i < Math.sqrt(givenNumber) ; i++) {
        if (givenNumber % i == 0) return false

    }

    return true
}


function findLargestPrimeFactor (givenNumber: number) : number {   
    let primeFactors:           Array<number> = []
    let portionLeftToFactorize: number = givenNumber
    
    for (let i: number = 2 ; i < portionLeftToFactorize ; i++) {
        if (isPrimeNumber(portionLeftToFactorize)) {
            primeFactors.push(portionLeftToFactorize)
            break
        }

        if (portionLeftToFactorize % i == 0 && isPrimeNumber(i)) {
            primeFactors.push(i)
            portionLeftToFactorize /= i
            i = 1
        }

    }

    return Math.max(...primeFactors)
}


let givenNumber: number = 600851475143  
console.time()  
let largestPrimeFactor: number = findLargestPrimeFactor (givenNumber) 
console.timeEnd()
// default: 62.175ms
console.log ("The largest prime factor of ", givenNumber, " is: ", largestPrimeFactor) // Answer is 6857
