/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if (num < 10) return num;

    let sum = 0;
    let i = 0;

    let len = 2;
    while (num > Math.pow(10, len)) len++;

    while (num != 0) {
        let val = Math.floor(num / Math.pow(10, len-1));
        sum += val;
        num -= val * Math.pow(10, len-1);

        len--;
    }
    
    return addDigits(sum);
};