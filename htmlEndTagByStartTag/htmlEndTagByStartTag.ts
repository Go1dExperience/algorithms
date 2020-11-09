function htmlEndTagByStartTag(startTag: string): string {
    let HTMLstartTag = startTag.split(" ")[0];
    let HTMLTagName = HTMLstartTag.slice(1);
    if (HTMLTagName[HTMLTagName.length - 1] === ">")
        return "</".concat(HTMLTagName);
    else return "</".concat(HTMLTagName).concat(">");
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
