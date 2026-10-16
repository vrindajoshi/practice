/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    if (n == 1) return ["()"];

    let arr = [];

    let set = new Set();

    let subArr = generateParenthesis(n-1);
    
    for (let i = 0; i < subArr.length; i++) {
    let sub = subArr[i];

    for (let j = 0; j <= sub.length; j++) {
        let result = sub.slice(0, j) + "()" + sub.slice(j);

        if (!set.has(result)) {
            arr.push(result);
            set.add(result);
        }
    }
}

    
    return arr;
};