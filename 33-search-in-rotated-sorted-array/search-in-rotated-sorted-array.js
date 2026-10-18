/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if (nums.length === 0) return -1;

    if (nums.length === 1) {
        if (nums[0] === target) return 0;
        return -1;
    }
    let n = nums.length;

    let mid = Math.floor(n/2);
    if (nums[mid] === target) return mid;

    // check to see if a side is sorted
    if (nums[0] <= nums[mid]) { // sorted
        if (target >= nums[0] && target < nums[mid]) {
            return search(nums.slice(0, mid), target);
        }
        else {
            val = search(nums.slice(mid+1), target);
            if ( val == -1) return -1;
            return mid + 1 + val;
        }
    } else {
        if (target > nums[mid] && target <= nums[n-1]) {
            val = search(nums.slice(mid+1), target);
            if (val == -1) return -1;
            return mid + 1 + val;
        }
        else {
            return search(nums.slice(0, mid), target);
        }
    } 
    
};