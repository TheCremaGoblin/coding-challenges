// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let myInt = 1;
    for (let i = 1; i <= n; i++){
      myInt *= i
    }
    return myInt
}