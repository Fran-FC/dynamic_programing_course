const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let  shortestCombination = null;

    for (let n of numbers) {
        const remainder = targetSum - n;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, n];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }


    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [5, 3, 2]));
console.log(bestSum(100, [1, 5, 25, 2]));