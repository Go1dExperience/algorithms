function reflectString(inputString: string): string {
    let oldAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let newAlphabet = [...oldAlphabet].reverse();
    let result = "";
    inputString.split("").forEach(char => {
        result = result.concat(newAlphabet[oldAlphabet.indexOf(char)]);
    });
    return result;
}

console.log(reflectString("name"));
