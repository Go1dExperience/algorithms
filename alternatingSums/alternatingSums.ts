function alternatingSums(a: number[]): number[] {
  let s1 = 0,
    s2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      s2 += a[i];
    }
    if (i % 2 !== 0) {
      s1 += a[i];
    }
  }
  return [s2, s1];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
