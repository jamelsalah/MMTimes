function limitText(paragraph, maxLength = 20) {
    var newMaxLength = maxLength
    
    for(let i = 0; i < 20; i ++) {
        const lastChar = paragraph.charAt(newMaxLength);

        if(lastChar != " ") {
            newMaxLength++;
        } else {
           break;
        }
    } 

    const newParagraph = paragraph.substring(0, newMaxLength) + "...";
    
    return newParagraph;
}