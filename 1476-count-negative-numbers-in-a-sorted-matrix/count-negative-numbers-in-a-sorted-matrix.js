/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let nums = 0;
    let cols = grid[0].length;

    for (let i = 0; i < grid.length; i++) {
        let left = 0;
        let right = cols - 1;
        let firstNegative = cols;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (grid[i][mid] < 0) {
                firstNegative = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        nums += (cols - firstNegative);
    }

    return nums;
};
