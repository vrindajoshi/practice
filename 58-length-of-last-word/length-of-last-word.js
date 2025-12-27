/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let i = 1;

    // starting space;
    while ((s.at(s.length-i) == ' ') && i < s.length){
        i++;
    }

    let n = 0;

    while ((s.at(s.length-i) !== ' ') && i <= s.length) {
        n++;
        i++;
    }   

    return n; 
};