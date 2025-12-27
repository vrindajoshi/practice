/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if (x == 0) return 0;

    let z = 1;
    let y = x;

    while ( (y - z) > 1 ) {
        z++;
        y = x/z;
    }

    return ( y > z ) ? Math.floor(z) : Math.floor(y);

};