/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    const fib = new Map();

    if (n == 0) return 0;
    else if (n == 1) return 1;

    fib.set(0, 0);
    fib.set(1, 1);

    let m = 2;

    return calcFib(fib, m, n);
    
};

var calcFib = function(fib, m, n) {
    if (m == n) return fib.get(m-1) + fib.get(m-2);
    else {
        fib.set(m, (fib.get(m-1) + fib.get(m-2)));
        m++;
        return calcFib(fib, m, n)
    }
}