/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if (nums.length == 0) return [-1, -1];

    // binary search
    let max = nums.length-1;
    let min = 0;
    let mid;

    if (nums[0] == target) mid = 0;
    else if (nums[max] == target) mid = max;
    else {
        do {
            mid = Math.floor((max+min)/2);
            if (nums[mid] > target) max = mid;
            else if (nums[mid] < target) min = mid;
        } while (nums[mid] != target && (max-min) > 1) 


        if (nums[mid] != target) return [-1, -1];
    }

    max = mid;
    min = mid;

    while (target == nums[max] && max < nums.length) max++;
    while (target == nums[min] && min >= 0) min--;

    // re adjust values
    min++;
    max--;    

    return [min, max];


    
};