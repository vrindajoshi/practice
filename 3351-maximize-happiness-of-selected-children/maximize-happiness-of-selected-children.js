/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {

    // sort function decreasing
    happiness.sort((a,b) => b-a);
    let sum = 0;

    for (let i = 0; i < k; i++) {
        const val = happiness[i] - i;
        if (val <= 0) break;
        sum += val;
    }

    return sum;
    
};