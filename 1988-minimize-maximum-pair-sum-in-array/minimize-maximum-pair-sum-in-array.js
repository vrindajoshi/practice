/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {

    nums.sort((a,b) => a - b);

    let i = 0; 
    let max = nums[i] + nums[nums.length-1-i];
    i++;

    while (i < nums.length/2) {
        let temp = nums[i] + nums[nums.length-1-i];
        if (temp > max) max = temp;
        i++;
    }

    return max;
    
};