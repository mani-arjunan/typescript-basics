function findIndex(originalString, char, nextValue) {
    for (var i = 0; i < originalString.length; i++) {
        if (originalString[i] === char) {
            if (nextValue === '*') {
                return i;
            }
            else if (nextValue === originalString[i + 1]) {
                return i;
            }
        }
    }
    return -1;
}
function patternMatching(str, pattern) {
    var patternIndex = 0;
    var fileIndex = 0;
    while (patternIndex !== pattern.length) {
        if (pattern[patternIndex] !== '*') {
            if (str[fileIndex] !== pattern[patternIndex]) {
                return false;
            }
            fileIndex++;
        }
        else {
            fileIndex = findIndex(str, pattern[patternIndex + 1], pattern[patternIndex + 2]);
        }
        patternIndex++;
    }
    return true;
}
console.log(patternMatching('filename.txt', 'fi***t'));
