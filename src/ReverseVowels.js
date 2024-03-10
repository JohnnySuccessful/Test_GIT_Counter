function reverseVowels(str) {
    const vowels = 'auioeAUIOE';

    let vowelArr = [];
    let newStr = '';

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelArr.push(char)
        }
    }

    for (let char of str) {
        if (vowels.includes(char)) {
            newStr += vowelArr.pop();
        } else {
            newStr += char;
        }
    }

    return newStr;
}

console.log(reverseVowels('123yohoho098easyPeasy99'))