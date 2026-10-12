/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;

    let max = (Math.min(height[left], height[right])) * right;

    if (height.length == 2) return max;

    while (left < right) {
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

        let newMax = (Math.min(height[left], height[right])) * (right-left);

        max = max > newMax ? max : newMax;
    }

    return max;
    
};