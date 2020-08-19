// sum of multiple of 3 or 5 below 1000

function findMultipleSum() : number {
    let i: number
    let sum: number = 0

    for ( i = 3 ; i < 1000 ; i++ ) {
        if ( i % 3 ==0 || i % 5 == 0 ) {
            sum += i
        }
    }
    return sum
}


let multipleSum = findMultipleSum()
console.log(multipleSum)