/*
    Project Euler problem #3

    Largest prime factor
    -----------------------------

    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?

*/ 


function findLargestFactor (givenNumber: number) : number {   

    let largestPrimeFactor: number = 0
    let isPrime:            boolean
 
    for (let i: number = 2 ; i < givenNumber ; i++) {

        if (givenNumber % i == 0) {

            isPrime = true
            for (let j: number = 2 ; j <= Math.sqrt(i) ; j++) {

                if (i % j == 0) {
                    isPrime = false
                    break
                } 
            } 
            if (isPrime == true && i > largestPrimeFactor) largestPrimeFactor = i
        }
    }
    return largestPrimeFactor
}


let givenNumber:        number = 600851475143  
let largestPrimeFactor: number = findLargestFactor (givenNumber) 
console.log (largestPrimeFactor)
