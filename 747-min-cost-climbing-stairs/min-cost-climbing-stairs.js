/**
 * @param {number[]} cost
 * @return {number}
 */


var minCostClimbingStairs = function(cost) {

    let memo = {};
    return dp(cost, memo);
    
};

var dp = function(staircase, memo) {

    let n = staircase.length;

    if (n == 1) return 0;
    if (n == 2) return Math.min(staircase[0], staircase[1]);
    if (n >= 3) {

        if (memo[n] !== undefined) {
            return memo[n];
        }

        let costOne = staircase[n-1] + dp(staircase.slice(0, n-1), memo);
        let costTwo = staircase[n-2] + dp(staircase.slice(0, n-2), memo);


        memo[n] = Math.min(costOne, costTwo);

        return memo[n];
    }
}