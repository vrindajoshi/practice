/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {

    if (n == 1) return true;
    else if (n == 0) return false;
    else if (n%4 == 0) return isPowerOfFour(n/4);
    else return false;
    
};