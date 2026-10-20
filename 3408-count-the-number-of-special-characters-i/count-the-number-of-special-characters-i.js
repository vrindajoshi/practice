/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const set = new Set(word);
    let special = 0;

    for (let i = 0; i < 26; i++) {
        const lower = String.fromCharCode(97 + i);
        const upper = String.fromCharCode(65 + i);

        if (set.has(lower) && set.has(upper)) {
            special++;
        }
    }

    return special;
};