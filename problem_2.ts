/* Find the sum of the even-valued terms that do not exceed four million 
 of fibonacci series */

 let limit: number = 4000000

 function findEvenTermSum ( prevNumber1: number, prevNumber2: number, sum: number ) : number {   
    let nextNumber: number = prevNumber1 + prevNumber2 
    if ( nextNumber >= limit ) {
        return sum
    }
    else if ( nextNumber % 2 == 0 ) {
        sum += nextNumber
    }
    return findEvenTermSum ( prevNumber2, nextNumber, sum )
 }

 let evenTermSum: number = findEvenTermSum ( 1, 2, 2 ) 
 console.log ( evenTermSum )