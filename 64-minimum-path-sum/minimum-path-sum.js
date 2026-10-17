
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let m = grid.length;
    let n = grid[0].length;

    // create 2d matrix visited array
    let visited = Array.from(
        { length: m },
        () => Array(n).fill(false)
    );

    // create 2d matrix shortest path array
    let shortestPath = Array.from(
        { length: m },
        () => Array(n).fill(Infinity)
    );

    let currRow = 0;
    let currCol = 0;

    shortestPath[currRow][currCol] = grid[currRow][currCol];

    // priority queue: [path sum, row, col]
    let queue = [[grid[currRow][currCol], currRow, currCol]];

    // Dijkstra's algorithm
    while (queue.length > 0) {

        // Get the entry with the smallest path sum
        queue.sort((a, b) => a[0] - b[0]);

        let [currPath, currRow, currCol] = queue.shift();

        if (visited[currRow][currCol]) continue;

        visited[currRow][currCol] = true;

        if (currRow === m - 1 && currCol === n - 1) {
            return currPath;
        }

        // Move down
        if (currRow + 1 < m) {
            let temp = currPath + grid[currRow + 1][currCol];

            if (temp < shortestPath[currRow + 1][currCol]) {
                shortestPath[currRow + 1][currCol] = temp;
                queue.push([temp, currRow + 1, currCol]);
            }
        }

        // Move right
        if (currCol + 1 < n) {
            let temp = currPath + grid[currRow][currCol + 1];

            if (temp < shortestPath[currRow][currCol + 1]) {
                shortestPath[currRow][currCol + 1] = temp;
                queue.push([temp, currRow, currCol + 1]);
            }
        }
    }

    return shortestPath[m - 1][n - 1];
};
