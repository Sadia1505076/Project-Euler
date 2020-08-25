/*
    Project Euler problem #4

    Largest palindrome product
    ---------------------------------
    
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.

*/


let palindromeNumbers: Array<number> = [];

function isPalindromeNotUsingString (input: number) : boolean {
    // let reversedDigits:   Array<number> = [];
    let reversedInput: number = 0;
    let quotient:      number = input;
    let remainder:     number;

    while (quotient != 0) {
        // reversedDigits.push (quotient % 10);
        remainder = quotient % 10;
        reversedInput = reversedInput * 10 + remainder;
        quotient = Math.floor(quotient / 10);
    }

    /*
    let digits: Array<number> = [];
    digits = digits.concat(reversedDigits).reverse();
    return digits.every((val, index) => val == reversedDigits[index]);
    */
    
    return input == reversedInput;    
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
            let multiple: number = i * j; 
            if (multiple > 100000 && isPalindromeNotUsingString (multiple)) {
                palindromeNumbers.push(multiple);
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
// without array, time: 45.653ms
console.log("Largest palindromic number made from the product of two 3-digit numbers is: ", largestPalindrome); 
// Answer is 906609