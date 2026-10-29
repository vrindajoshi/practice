/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let start = 0;
    let end = 0;
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[end] < prices[i]) end = i;

        if (prices[start] > prices[i]) {
            max = (max > prices[end] - prices[start]) ? max : prices[end] - prices[start];
            start = i;
            end = i;
        }
    }

    return (max > prices[end] - prices[start]) ? max : prices[end] - prices[start];;
};