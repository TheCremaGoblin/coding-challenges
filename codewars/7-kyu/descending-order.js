//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

let descendingOrder = n => {
    let sum = Array.from(String(n), Number).sort((a,b) => a - b).reverse().join('')
    return Number(sum)
  }

  //second attempt, refactored my solution, less to read

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }