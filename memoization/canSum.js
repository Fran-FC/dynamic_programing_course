const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    
    for(let n of numbers) {
        const remainder = targetSum - n;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};

console.log(canSum(7, [2, 3, 4, 7]));
console.log(canSum(27, [3, 4, 7]));
console.log(canSum(4000, [2, 3, 4, 7]));