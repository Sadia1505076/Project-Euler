/*
    Project Euler problem #4

    Largest palindrome product
    ---------------------------------
    
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.

*/


let palindromeNumbers: Array<number> = [];

function isPalindrome (input: number) : boolean {
    let stringFormedNumber: string = input.toString(10);
    let reversedString:     string = stringFormedNumber.split('').reverse().join("");
    
    if (stringFormedNumber != reversedString) return false; 
    return true;
}

function findLargestPalindrome (lowerBound: number, upperBound: number) : number {
    for (let i: number = lowerBound; i <= upperBound; i++){
        for (let j: number = i; j <= upperBound; j++){
            let potentialPalindrome: number = i * j; 
            if (isPalindrome (potentialPalindrome)) {
                palindromeNumbers.push(potentialPalindrome);
            }
        }
    }

    return Math.max(...palindromeNumbers)
}


console.time("time");
let largestPalindrome: number = findLargestPalindrome(100, 999);
console.timeEnd("time");
//time: 288.390ms
console.log("Largest palindromic number made from the product of two 3-digit numbers is: ", largestPalindrome); 
// Answer is 906609