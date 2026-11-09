/**
 * @param {number[]} nums
 * @return {number}
 */


var jump = function(nums) {
    let memo = new Map();

    function dp(i) {
        if (i >= nums.length - 1) return 0;

        if (memo.has(i)) return memo.get(i);

        let min = Infinity;

        for (let j = 1; j <= nums[i]; j++) {
            let val = 1 + dp(i + j);
            min = Math.min(min, val);
        }

        memo.set(i, min);
        return min;
    }

    return dp(0);
};
