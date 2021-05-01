function curry(a){
    let result = a;
    let finalResult = function(){
        if(arguments.length > 0){
            Array.from(arguments).forEach(args => {
                result += args
            })
            return finalResult
        } else {
            return result
        }
    }

    return finalResult
}


console.log(curry(1)(2)(3)(4)(10)())