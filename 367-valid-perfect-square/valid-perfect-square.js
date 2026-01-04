/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    let a = 1;
    let b = num;

    while (b >= a) {
        if (a == b) return true;
        a++;
        b = num/a;
    }

    return false;
    
};