/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let array = [];
    let sum = 0;
    
    for (let i = 0; i < operations.length; i++) {
        let char = operations[i];
        switch (char){
            case "+":
                array.push(array[array.length-1] + array[array.length-2]);
                break;
            case "D":
                array.push(array[array.length-1] * 2);
                break;
            case "C":
                array.pop();
                break;
            default:
                array.push(parseInt(char));
        }
    }

    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        sum = sum + array[i];
    }
    
    return sum;


};