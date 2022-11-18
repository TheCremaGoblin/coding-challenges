//Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

let oddOrEven = array => {
    return array.reduce((t, c) => t + c, 0) % 2 === 0 ? 'even' : 'odd'
 }

 //second attempt, strict equality not needed, if the sum will divide without any remainders, it will be true!

 function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }