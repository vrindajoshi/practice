/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {

    let ignoreSet = new Map();
    let goodSet = new Map();

    ignoreSet.set(1);
    
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {

        if (ignoreSet.has(nums[i])) continue;
        else if (goodSet.has(nums[i])) {
            sum += goodSet.get(nums[i]);
            continue;
        }

        let numFactors = 2;
        let subSum = 1 + nums[i];

        for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
            if (j == Math.sqrt(nums[i])) {
                subSum += j;
                numFactors++;
            } else if (nums[i] % j == 0) {
                subSum += j;
                subSum += (nums[i]/j)
                numFactors += 2;
            }
        }
        
        if (numFactors == 4) {
            sum += subSum;
            goodSet.set(nums[i], subSum);
        }
        else ignoreSet.set(nums[i]);

    }

    return sum;

};
