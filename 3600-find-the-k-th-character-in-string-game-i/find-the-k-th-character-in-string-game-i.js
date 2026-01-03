/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {

    return kThString("a", k);

};

var kThString = function(str, k) {

    let len = str.length;
    
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(str.charCodeAt(i) + 1);
    }

    if (str.length >= k) return str.charAt(k-1);
    else return kThString(str, k);
    
}