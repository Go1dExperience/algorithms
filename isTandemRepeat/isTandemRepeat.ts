function isTandemRepeat(inputString: string): boolean {
    if (inputString.length % 2 !== 0) return false;
    return (
        inputString.slice(0, inputString.length / 2) ==
        inputString.slice(inputString.length / 2)
    );
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
