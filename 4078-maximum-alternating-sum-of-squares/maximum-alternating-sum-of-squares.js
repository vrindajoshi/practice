/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i]*nums[i];
    }

    nums.sort((a,b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    let sum = 0;

    while (left <= right) {
        sum += nums[right--];
        if (left > right) {
            break;
        }
        sum -= nums[left++];
    }

    return sum;
};