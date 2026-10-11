/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let result = 0;

    for(let i = 1; i <= nums.length; i++){
        let j = (nums.length % i == 0) ? nums[i-1]*nums[i-1] : 0;
        result += j;
    }

    return result;
};