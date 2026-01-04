/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let isZero = false;

    let sum = 0; 
    let max = 0;

    for (let i in nums) {
        if (nums[i] > max) max = nums[i];
        sum += nums[i];
        if (nums[i] === 0) isZero = true;
    }

    let val = (max*(max+1))/2 - sum;

    if (val == 0 && isZero) return max+1;
    else return val;
    
};