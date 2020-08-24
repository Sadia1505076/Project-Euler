/*
    Project Euler problem #4

    Largest palindrome product
    ---------------------------------
    
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.

*/


let palindromeNumbers: Array<number> = [];

function isPalindromeWithoutString (input: number) : boolean {
    let reversedDigits:   Array<number> = [];
    let quotient:         number = input;

    while (quotient != 0) {
        reversedDigits.push (quotient % 10);
        quotient = Math.floor(quotient / 10);
    }

    let digits: Array<number> = [];
    digits = digits.concat(reversedDigits).reverse();
    return digits.every((val, index) => val == reversedDigits[index]);
}

function isPalindrome (input: number) : boolean {
    let stringFormedNumber: string = input.toString(10);
    let reversedString:     string = stringFormedNumber.split('').reverse().join("");    
    if (stringFormedNumber != reversedString) return false; 
    return true;
}

function deriveLargestPalindromeFromProduct (lowerBound: number, upperBound: number) : number {
    for (let i: number = lowerBound; i <= upperBound; i++){
        for (let j: number = i; j <= upperBound; j++){
            let potentialPalindrome: number = i * j; 
            if (potentialPalindrome < 100000) continue;
            if (isPalindromeWithoutString (potentialPalindrome)) {
                palindromeNumbers.push(potentialPalindrome);
            }
        }
    }

    return Math.max(...palindromeNumbers)
}


console.time("time");
let lowerBound:        number = 100;
let upperBound:        number = 999;
let largestPalindrome: number = deriveLargestPalindromeFromProduct (lowerBound, upperBound);
console.timeEnd("time");
//previous time without optimization: 288.390ms
// without string, time: 116.302ms
// with string , time: 173.503ms
console.log("Largest palindromic number made from the product of two 3-digit numbers is: ", largestPalindrome); 
// Answer is 906609
