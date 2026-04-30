// Given two strings s and t, return true if t is an anagram of s,
//  and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // subtract using t
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};
 