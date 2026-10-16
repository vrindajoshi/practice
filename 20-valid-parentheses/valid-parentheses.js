/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++){
        if (s.at(i) == '(' || s.at(i) == '{' || s.at(i) == '[') {
            stack.push(s.at(i));
        } else {
            if (s.at(i) == ')' && stack.pop() != '(') {
                return false;
            } else if (s.at(i) == '}' && stack.pop() != '{') {
                return false;
            } else if (s.at(i) == ']' && stack.pop() != '[') {
                return false;
            }
        }
    }

    return (stack.length == 0);
    
};