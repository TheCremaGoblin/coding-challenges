// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    console.log(this + "hello")
   
   return this.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
 }