/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {

    if (n <= 0) return false;
    if (n == 1) return true;
    
    const set = new Set();

    let i = 1;

    while (i <= Math.sqrt(n)) {
        if (n % i == 0) {
            if (isPrime(i)) return false;
            if (isPrime(n/i)) return false;
        }
        i++;
    }

    return true;
};

var isPrime = function(num) {
    if (num == 1 || num == 2 || num == 3 || num == 5) return false;

    let numFactors = 2;

    let i = 2;

    while (i <= Math.sqrt(num)) {
        if (i * i == num) numFactors++;
        else if (num % i == 0) numFactors += 2;
        i++;
    }

    if (numFactors == 2) return true;

    return false;
    
}