/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let sum = 0;

    const numerals = new Map();
    numerals.set('I', 1);
    numerals.set('V', 5);
    numerals.set('X', 10);
    numerals.set('L', 50);
    numerals.set('C', 100);
    numerals.set('D', 500);
    numerals.set('M', 1000);

    for (let i = s.length-1; i >= 0; i--) {
        let number = numerals.get(s.at(i));
        if (i >= 0 && s.length >= 2 && number < numerals.get(s.at(i+1))) {
            sum -= number;
        } else sum += number;
        console.log(sum);
    }
    
    return sum;
};