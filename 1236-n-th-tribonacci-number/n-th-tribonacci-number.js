/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    let fibMemo = {};

    fibMemo[0] = 0;
    fibMemo[1] = 1;
    fibMemo[2] = 1;

    return dp(n, fibMemo);
};

let dp = function(n, memo) {

    if (memo[n] !== undefined) return memo[n];
    
    memo[n] = dp(n-1, memo) + dp(n-2, memo) + dp(n-3, memo)
    return memo[n];

}