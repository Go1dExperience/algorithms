function circleOfNumbers(n: number, firstNumber: number): number {
    const distance = 360 / n;
    const angleOfFN = firstNumber * distance;
    if (angleOfFN >= 180) return (angleOfFN - 180) / distance;
    return (angleOfFN + 180) / distance;
}

console.log(circleOfNumbers(10, 5));
