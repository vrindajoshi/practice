/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    
    const n = nums.length;

    const arr = nums.map((num, index) => {
        let x = num;
        let sum = 0;

        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }

        return { num, sum, index };
    });

    arr.sort((a, b) => a.sum - b.sum || a.num - b.num);

    const visited = new Array(nums.length).fill(false);
    let swaps = 0;

    for (let i = 0; i < nums.length; i++) {
        if (visited[i] || arr[i].index === i) continue;

        let cycleSize = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = arr[j].index;
            cycleSize++;
        }

        swaps += cycleSize - 1;
    }

    return swaps;
    
};