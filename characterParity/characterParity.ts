function characterParity(symbol: string): string {
    const num = parseInt(symbol);
    if (isNaN(num)) return "Not a digit";
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
