/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {

    if (s == "") return true;
    if (t == "") return false;

    let sStack = new Stack();

    for (let i = s.length-1; i >= 0; i--) {
        sStack.push(s.at(i));
    }

    let curr = sStack.pop();

    for (let i = 0; i < t.length; i++) {
        if (t.at(i) == curr){
            if (sStack.isEmpty()) return true;
            curr = sStack.pop();
        }
    }
    
    return false;

};