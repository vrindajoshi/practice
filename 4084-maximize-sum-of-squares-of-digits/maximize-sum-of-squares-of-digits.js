/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {

    let count = sum; 

    let number = "";

    for (let i = 0; i < Math.floor(count / 9) && i < num; i++) {
        number += "9";
    }

    if (count % 9 > 0) {
        number += (count%9).toString();
    }

    count -= count % 9;

    if (number.length > num) return "";

    for (let i = number.length; i < num; i++) {
        number += "0";
    }

    return number;
    
    
};