// find the largest prime factor of 600851475143 


function findLargestFactor ( givenNumber: number ) : number {   
    let i: number
    let j: number
    let isPrime: boolean
    let largestPrimeFactor: number = 0

    for ( i = 2 ; i < givenNumber ; i++ ) {
        if ( givenNumber % i == 0 ) {
            isPrime = true
            for ( j = 2 ; j <= Math.sqrt(i) ; j++ ) {
                if ( i % j == 0 ) {
                    isPrime = false
                    break
                } 
            } 
            if ( isPrime == true && i > largestPrimeFactor ) largestPrimeFactor = i
        }
    }
    return largestPrimeFactor
}


let givenNumber: number = 600851475143  
let largestPrimeFactor: number = findLargestFactor (givenNumber) 
console.log (largestPrimeFactor)
