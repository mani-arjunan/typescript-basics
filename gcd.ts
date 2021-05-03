const gcdFinder = (num1: number, num2: number): number => {
    let gcd: number = 1;
    for(let i = 1; i <= num1 && i <= num2; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i
        }
    }
    return gcd;
}

console.log(gcdFinder(72, 120))