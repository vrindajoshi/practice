/**
 * @param {string} s
 * @return {number}
 */

function longestValidParentheses(s) {
    let st = [];

    // Push -1 as the initial index to handle
    // the edge case
    st.push(-1);
    let maxLen = 0;

    // Traverse the string
    for (let i = 0; i < s.length; i++) {
        
        // If we encounter an opening parenthesis, 
        // push its index
        if (s[i] === '(') {
            st.push(i);
        } else {
            
            // If we encounter a closing parenthesis,
            // pop the stack
            st.pop();

            // If stack is empty, push the current index 
            // as a base for the next valid substring
            if (st.length === 0) {
                st.push(i);
            } else {
                
                // Update maxLength with the current length 
                // of the valid parentheses substring
                maxLen = Math.max(maxLen, i - st[st.length - 1]);
            }
        }
    }

    return maxLen;
}

// Driver Code
let s = "(()())";
console.log(longestValidParentheses(s));