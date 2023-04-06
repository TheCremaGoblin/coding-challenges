// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often 
// referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if (!str) {
      return str
    } else {

        let myStr = str.split(/[_-]/)

        if (myStr[0][0] === myStr[0][0].toUpperCase()) {
            return myStr.map(element => element[0].toUpperCase() + element.slice(1)).join('')
        } else {
            return myStr.map((element, index) => index === 0 ? element : element[0].toUpperCase() + element.slice(1)).join('')
        }
    }
}

//a better solution!

function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join('')
}