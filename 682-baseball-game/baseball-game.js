/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    
    for (let op of operations) {
        switch (op){
            case "+":
                stack.push(stack.at(-1)+ stack.at(-2));
                break;
            case "D":
                stack.push(stack.at(-1) * 2);
                break;
            case "C":
                stack.pop();
                break;
            default:
                stack.push(parseInt(op));
        }
    }

    return stack.reduce((a, b) => a + b, 0);
    
    return stack;


};