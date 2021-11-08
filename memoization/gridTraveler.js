// return 0 if cannot be 
const gridTraveler = (n, m, memo = {}) => {
    // are the args in memo?
    const key = n+','+m;
    if(key in memo) return memo[key];
    const key2 = m+','+n;
    if(key2 in memo) return memo[key2];

    if(n==1 && m==1) return 1;
    if(n==0 || m==0) return 0;

    memo[key] = gridTraveler(n-1, m, memo) + gridTraveler(n, m-1, memo);
    return memo[key];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(1, 2));
console.log(gridTraveler(5, 6));
console.log(gridTraveler(18, 18));
console.log(gridTraveler(180, 180));
console.log(gridTraveler(1800, 1800));
