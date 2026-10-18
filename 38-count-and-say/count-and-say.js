/**
 * @param {number} n
 * @return {string}
 */

var helper = function(str) {

    let val = "";

    let curr = 0;
    while (str.at(curr) != null) {
        let i = curr+1;
        while (str.at(i) == str.at(curr)) i++;

        val += (i-curr).toString();
        val += str.at(curr);

        curr = i;
    }

    return val;
}

var countAndSay = function(n) {

    if (n == 1) return "1";

    val = "1";
    while (n-1 > 0) {
        val = helper(val);
        n--;
    }

    return val;
    
};