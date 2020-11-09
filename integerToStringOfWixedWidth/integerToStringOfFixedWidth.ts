function integerToStringOfFixedWidth(number: number, width: number): string {
    let input = number.toString();
    while (input.length < width) {
        input = "0".concat(input);
    }
    if (input.length > width) {
        input = input.substring(width);
    }
    return input;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 7));
