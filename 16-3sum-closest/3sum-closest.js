/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    let closest = nums[0] + nums [1] + nums[2];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (k = j+1; k < nums.length; k++) {
                let temp = nums[i] + nums [j] + nums[k];
                if (Math.abs(target-temp) < Math.abs(target-closest)) {
                    closest = temp;
                }
            }
        }
    }

    return closest;
};