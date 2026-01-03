/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let map = new Map();

    map.set(n);

    return happy(n, map);  
    
};

var happy = function(n, map) {

    if (n == 1) return true;

    let sum = 0;

    // get digits 
    let digits = [];
    while (n != 0) {
        sum += Math.pow(n%10, 2);
        n = Math.floor(n/10);
    }

    if (map.has(sum)) return false;

    map.set(sum);

    return happy(sum, map); 

}