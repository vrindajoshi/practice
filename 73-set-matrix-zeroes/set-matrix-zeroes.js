
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let arr = new Array(m + n).fill(false);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                arr[i] = true;
                arr[m + j] = true;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        if (arr[i]) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 0; j < n; j++) {
        if (arr[m + j]) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
};
