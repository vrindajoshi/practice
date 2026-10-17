
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);

    if (dividend === MIN && divisor === -1) return MAX;

    let negative = (dividend > 0) !== (divisor > 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let ret = 0;

    while (dividend >= divisor) {
        let value = divisor;
        let count = 1;

        while (dividend >= value + value) {
            value += value;
            count += count;
        }

        dividend -= value;
        ret += count;
    }

    ret = negative ? -ret : ret;

    return Math.max(MIN, Math.min(MAX, ret));
};
