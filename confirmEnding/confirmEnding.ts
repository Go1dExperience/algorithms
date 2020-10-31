function confirmEnding(str: string, target: string): boolean {
    return str.substr(target.length - 1) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
