// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once 
// in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining 
// if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
    const chars = {};
    const w = word.toLowerCase();
      
    for (const char of w) {
        if (chars[char]) {
          chars[char] += 1;
        } else {
          chars[char] = 1;
        }
    }

    const str = [];

    for (const char of w) {
      if (chars[char] > 1) {
        str.push(')');
      } else {
        str.push('(');
      }
    }

    return str.join('');
}