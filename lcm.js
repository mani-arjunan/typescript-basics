var lcmFinder = function (num1, num2) {
    var max = num1 > num2 ? num1 : num2;
    while (true) {
        if (max % num1 === 0 && max % num2 === 0) {
            break;
        }
        max++;
    }
    return max;
};
console.log(lcmFinder(72, 120));
