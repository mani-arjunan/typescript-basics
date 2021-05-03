var gcdFinder = function (num1, num2) {
    var gcd = 1;
    for (var i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
};
console.log(gcdFinder(72, 120));
