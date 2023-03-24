// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert 
// that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(s){
    let lowerCase = 0;
    let upperCase = 0;
    s.split('').forEach(letter => letter === letter.toUpperCase('') ? upperCase += 1 : lowerCase += 1)
    
    if (lowerCase === upperCase) {
      return s.split('').map(letter => letter = letter.toLowerCase('')).join('')
    } else if (lowerCase < upperCase) {
      return s.split('').map(letter => letter = letter.toUpperCase('')).join('')
    } else {
      return s.split('').map(letter => letter = letter.toLowerCase('')).join('')
    }
}