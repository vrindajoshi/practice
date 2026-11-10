
var climbStairs = function(n, costs) {
    let memo = new Map();
    return dp(0, n, costs, memo);
};

let dp = function(start, n, costs, memo) {

    let m = n - start;

    if (memo.has(start)) return memo.get(start);

    if (m == 0) {
        return 0;
    }

    if (m == 1) {
        memo.set(start, costs[start] + 1);
    }

    else if (m == 2) {
        memo.set(start, Math.min(
            costs[start+1] + 4,
            costs[start] + 1 + dp(start+1, n, costs, memo)
        ));
    }

    else {
        let val = Math.min(
            costs[start+2] + 9 + dp(start+3, n, costs, memo),
            costs[start+1] + 4 + dp(start+2, n, costs, memo),
            costs[start] + 1 + dp(start+1, n, costs, memo)
        );

        memo.set(start, val);
    }

    return memo.get(start);
};
