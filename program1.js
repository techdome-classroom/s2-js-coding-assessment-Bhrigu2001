/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    function isValid(s) {
        const stack = [];
        const matchingBrackets = {
            ')': '(',
            '}': '{',
            ']': '['
        };
    
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char); // push opening brackets to the stack
            } else {
                // check if the stack is not empty and the top of the stack matches the current closing bracket
                if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                    return false; // invalid if no matching opening bracket or incorrect order
                }
            }
        }
    
        return stack.length === 0; // valid if all brackets are closed properly
    }
    
    // Example usage:
    console.log(isValid("()"));        // true
    console.log(isValid("()[]{}"));    // true
    console.log(isValid("(]"));        // false
    console.log(isValid("([)]"));      // false
    console.log(isValid("{[]}"));      // true
    











    
};

module.exports = { isValid };


