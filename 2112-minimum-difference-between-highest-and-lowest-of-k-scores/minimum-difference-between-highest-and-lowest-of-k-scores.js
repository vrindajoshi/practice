/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {

    nums.sort((a,b) => a - b);

    let smallestDiff = nums[k-1] - nums[0];

    for (let i = k; i < nums.length; i++) {
        if ((nums[i] - nums[i-k+1]) < smallestDiff) {
            smallestDiff = nums[i] - nums[i-k+1];
        }
    }

    return smallestDiff;
    
};