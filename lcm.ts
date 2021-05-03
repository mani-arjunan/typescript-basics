const lcmFinder = (num1: number, num2: number): number => {
    let max: number = num1 > num2 ? num1 : num2
    while(true){
        if(max % num1 === 0 && max % num2 === 0){
            break;
        }
        max++;
    }
    return max
}

console.log(lcmFinder(72, 120))