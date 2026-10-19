
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRowZero = matrix[0].includes(0);
    let firstColZero = matrix.some(row => row[0] === 0);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++)
                matrix[i][j] = 0;
        }
    }

    for (let i = 1; i < n; i++) {
        if (matrix[0][i] === 0) {
            for (let j = 1; j < m; j++)
                matrix[j][i] = 0;
        }
    }

    if (firstRowZero) {
        for (let j = 0; j < n; j++)
            matrix[0][j] = 0;
    }

    if (firstColZero) {
        for (let i = 0; i < m; i++)
            matrix[i][0] = 0;
    }
};
