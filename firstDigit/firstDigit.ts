function firstDigit(inputString: string): string {
    const index = inputString.search(/\d/);
    return inputString[index];
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
