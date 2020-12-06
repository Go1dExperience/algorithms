function stolenLunch(note: string): string {
    let messageAndCode = note.split(":");
    let alphabet = "abcdefghij".split("");
    let message = messageAndCode[0].split("").map(ele => {
        if (parseInt(ele)) {
            ele = alphabet[ele];
        }
        return ele;
    });
    let code = messageAndCode[1]
        .split("")
        .slice(1)
        .map(ele => alphabet.indexOf(ele).toString());
    return message.concat(": ").concat(code).join("");
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
