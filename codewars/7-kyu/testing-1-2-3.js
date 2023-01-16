//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//[] --> []
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = function(array){
    let test = array.map((num, i) => {
      let change = `${i + 1}: `
      return change += num  
    })
    return test
  }

  //second attempt, some refactoring

const numberTwo = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}