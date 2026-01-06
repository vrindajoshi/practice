/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let pc = [];
    pc.push([1]);

    for (let i = 1; i < numRows; i++) {
        let subArr = [1];
        for (let j = 1; j < i; j++) {
            subArr.push(pc[i-1][j] + pc[i-1][j-1]);
        }
        subArr.push(1);
        pc.push(subArr);
    }
    
    return pc;
};