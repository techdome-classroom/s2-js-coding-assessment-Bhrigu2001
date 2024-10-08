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
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                    return false;
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


