const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let n of numbers) {
        const remainder = targetSum - n;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, n];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;

};

console.log(howSum(7, [2, 3]));
console.log(howSum(27, [3, 4, 7]));
console.log(howSum(400, [3, 9, 5, 1, 7]));
console.log(howSum(300, [7, 14]))