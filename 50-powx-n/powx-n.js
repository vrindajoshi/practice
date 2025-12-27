/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if (x == 1 || n == 0) return 1;
    else if (x == -1 && n%2 == 0) return 1;
    else if (x == -1 && n&2 == 1) return -1;

    let power = Math.abs(n);
    let result = 1;
    let base = x;

    while (power > 0) {
        if (power % 2 === 1) {
            result *= base;
        }
        base *= base;
        power = Math.floor(power / 2);
    }

    return n < 0 ? 1 / result : result;
};
