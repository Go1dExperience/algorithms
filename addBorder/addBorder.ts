// function addBorder(picture: string[]): string[] {

// }
const addBorder = (picture: string[]): string[] => {
  const wall = "*".repeat(picture[0].length + 2);
  picture = picture.map((each) => "*".concat(each).concat("*"));
  return [wall, ...picture, wall];
};
console.log(addBorder(["abc", "ded"]));
