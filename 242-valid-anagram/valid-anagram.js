/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let Sstring = s.split('').sort().join('');
    let Tstring = t.split('').sort().join('');

    if (Sstring == Tstring) return true;
    else return false;
};