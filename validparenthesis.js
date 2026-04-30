// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the 
// input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of
// brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket 
// of the same type.
// Example 1:
// Input: s = "()"
// Output: true
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's a closing bracket
        if (map[char]) {
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        } else {
            // It's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0;

};