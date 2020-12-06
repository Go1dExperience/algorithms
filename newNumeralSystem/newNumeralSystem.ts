function newNumeralSystem(number: string): string[] {
    let result: string[] = [];
    let firstTen = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    firstTen.forEach((num, index) => {
        for (let i = 0; i < firstTen.length; i++) {
            if (index + i === firstTen.indexOf(number) && index <= i) {
                result.push(`${num} + ${firstTen[i]}`);
            }
        }
    });
    return result;
}

console.log(newNumeralSystem("G"));
