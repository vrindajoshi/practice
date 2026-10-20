/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {

    let special = 0;

    let map = new Map();

    for (let i = 0; i < word.length; i++) {
        const ch = word.charCodeAt(i);

        if (ch < 97) {
            if (!map.has(ch + 32)) {
                map.set(ch + 32, -1);
            } else if (map.get(ch + 32) === true) {
                special++;
                map.set(ch + 32, false);
            }
        } else if (!map.has(ch)) {
            console.log(ch);
            map.set(ch, true);
        } else if (map.get(ch) == false) {
            special--;
            map.set(ch, -1);
        }

    }

    return special;
    
};