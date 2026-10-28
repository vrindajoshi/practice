/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if (rowIndex == 0) return [1];
    else if (rowIndex == 1) return [1, 1];

    let arr = getRow(rowIndex-1);

    for (let i = 0; i < rowIndex-1; i++) {
        arr[i] = arr[i] + arr[i+1];
    }

    arr.unshift(1);

    return arr;

};