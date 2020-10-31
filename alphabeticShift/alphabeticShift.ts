function alphabeticShift(inputString: string): string {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const newInputStringArr = inputString.split("").map((eachChar) => {
    const indexOf = alphabet.indexOf(eachChar);
    return (eachChar = indexOf === 25 ? "a" : alphabet[indexOf + 1]);
  });
  return newInputStringArr.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("hello"));
