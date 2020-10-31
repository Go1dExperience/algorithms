function containsDuplicates(a: number[]): boolean {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i !== j) {
                if (a[i] === a[j]) return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
