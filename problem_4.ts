/*
    Project Euler problem #4

    Largest palindrome product
    ---------------------------------
    
    A palindromic number reads the same both ways. 
    The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.

*/


let allPalindromeNumber: Array<number> = [];

function isPalindrome (givenNumber: number) : boolean {
    let stringFormedNumber: string = givenNumber.toString(10);
    let reversedString:     string = stringFormedNumber.split('').reverse().join("");
    
    if (stringFormedNumber != reversedString) return false; 
    return true;
}

function findLargestPalindrome () : number {
    let largestPalindrome: number;

    for (let i: number = 100; i <= 999; i++){
        for (let j: number = i + 1; j <= 999; j++){
            let palindromeNumber: number = i * j; 
            if (isPalindrome (palindromeNumber)) {
                allPalindromeNumber.push(palindromeNumber);}
        }
    }

    return Math.max(...allPalindromeNumber)
}


console.time("time");
let largestPalindrome: number = findLargestPalindrome();
console.timeEnd("time");
//time: 288.390ms
console.log("Largest palindromic number made from the product of two 3-digit numbers is: ", largestPalindrome); 
// Answer is 906609