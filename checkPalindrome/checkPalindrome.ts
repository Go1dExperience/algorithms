function checkPalindrome(inputString: string): boolean {
    const palindrome = inputString.split("").reverse().join("");
    return inputString === palindrome;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
