/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    let a = 1;

    while (a * a <= num) {
        if (a * a === num) return true;
        a++;
    }

    return false;
};