/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums.sort((a, b) => a - b);

    if (nums[0] === 0 && nums[nums.length - 1] === 0) {
        return nums.length >= 3 ? [[0, 0, 0]] : [];
    }

    let arr = [];
    let tSet = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        let set = new Set();

        for (let j = i+1; j < nums.length; j++) {
            if (i != j) {
                let val = 0 - nums[i] - nums[j];
                if (set.has(val)) {
                    let subArr = [nums[i], nums[j], val].sort((a,b) => a - b);
                    let key = subArr.join(',');

                    if (!tSet.has(key)) {
                        arr.push(subArr);
                        tSet.add(key);
                    }
                } else set.add(nums[j]);
            }
        }

    }

    return arr;
    
};