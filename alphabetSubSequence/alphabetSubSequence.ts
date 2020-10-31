function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  const charValues: number[] = [];

  chars.forEach((char) => {
    charValues.push(char.charCodeAt(0));
  });
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }
  return true;
}
console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
// TODO This is a new todo test
