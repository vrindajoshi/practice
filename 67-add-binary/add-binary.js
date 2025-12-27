/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    // add leading zeros
    if (a.length != b.length) {

        min = a.length > b.length ? b : a;
        max = a.length > b.length ? a : b;

        diff = max.length - min.length;

        let sub = "0".repeat(diff);
        min = sub + min;

        a = min;
        b = max;
    }

    let carry = 0;

    let str = '';

    for (let i = a.length-1; i >= 0; i--) {
        let val = parseInt(a.at(i)) + parseInt(b.at(i)) + carry;
        carry = 0;
        if (val > 1) {
            val -= 2;
            carry = 1;
        } 
        str = val.toString() + str;
    }

    if (carry) str = "1" + str;
    
    return str;
    
};