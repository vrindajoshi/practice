/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {

    let min = -1;

    for (let i = l; i <= r; i++) {
        for (let j = 0; j < nums.length-i+1; j++) {

            let sum = 0;

            for (let k = j; k < j+i; k++) {
                sum+=nums[k];
            }

            if (sum == 1) return sum;

            if (sum > 0) {
                if (min < 0 || sum < min) min = sum;
            }
        }
    }
    
    return min;
};