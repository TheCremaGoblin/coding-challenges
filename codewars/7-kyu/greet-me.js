// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let capitalized = name.toLowerCase('').split('')
    return `Hello ${capitalized[0].toUpperCase('') + capitalized.slice(1).join('')}!`
};

  // OR

  
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};