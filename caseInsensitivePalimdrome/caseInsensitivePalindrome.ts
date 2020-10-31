function isCaseInsensitivePalindrome(inputString: string): boolean {
    const normalInput = inputString
        .split("")
        .map(char => char.toLowerCase())
        .join();
    const palindrome = inputString
        .split("")
        .reverse()
        .map(char => char.toLowerCase())
        .join();
    return normalInput === palindrome;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
