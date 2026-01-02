/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
    let n = nums.length / 2;

    const map = new Map();

    for (let i = 0; i <= nums.length; i++){
        if (map.has(nums[i])) return nums[i];
        else map.set(nums[i], null);
    }

};