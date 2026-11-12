/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {

    if (nums.length == 1) return 1;

    let currInc = 1;
    let currDec = 1;

    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] < nums[i]) {
            currInc++;
            currDec = 1;
        } else if (nums[i-1] > nums[i]) {
            currDec++;
            currInc = 1;
        } else {
            currDec = 1;
            currInc = 1;
        }

        let val = Math.max(currInc, currDec);
        if (val > max) max = val;
    }

    return max;
    
};