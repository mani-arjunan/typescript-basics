function twoSum(arr, sum){
    const resultArr = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === sum){
                resultArr.push([arr[i], arr[j]])
            }
        }
    }
    return resultArr
}


console.log(twoSum([3,5,2,-4,8,11],7))



function twoSum2(arr, sum){
    let differenceHash = {}
    let resultArr = []
    
    for(let i=0;i<arr.length;i++){
        let difference = sum - arr[i];
        if(differenceHash[arr[i]] === ''){
            resultArr.push([arr[i], difference])
        } else {
            differenceHash[difference] = '' 
        }
    }
    return resultArr
}

console.log(twoSum2([3,5,2,-4,8,11],7))
// 3,
// 5,
// -4,
