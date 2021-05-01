function findIndex(originalString: string, char: string, nextValue: string): number {
    for(let i=0;i<originalString.length;i++){
        if(originalString[i] === char){
            if(nextValue === '*'){
                return i
            } else if(nextValue === originalString[i + 1]){
                return i
            }
        }
    }
    return -1
}


function patternMatching(str: string, pattern: string): boolean {
    let patternIndex: number = 0;
    let fileIndex: number = 0;
    while(patternIndex !== pattern.length){
        if(pattern[patternIndex] !== '*'){
            if(str[fileIndex] !== pattern[patternIndex]){
                return false
            }
            fileIndex++;
        } else {
            fileIndex = findIndex(str, pattern[patternIndex], pattern[patternIndex + 1])
        }
        patternIndex++;
    }
    return true
}



console.log(patternMatching('filename.txt', '*****'))