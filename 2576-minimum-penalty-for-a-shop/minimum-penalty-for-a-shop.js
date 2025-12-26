/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {

    let penalty = 0;
    
    // closing at the zeroth hour
    for (let c of customers) {
        if (c == 'Y') {
            penalty++;
        }
    }

    let min = penalty;
    let bestHour = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] == 'Y') {
            penalty--
        } else penalty++;

        if (penalty < min) {
            min = penalty;
            bestHour = i+1;
        }
    }

    return bestHour;
};