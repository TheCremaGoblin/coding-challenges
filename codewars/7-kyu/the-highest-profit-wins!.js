//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
    if (arr.length === 1){
      arr.push(Number(arr))
      return arr
    } else {
    arr.sort((a, b) => a - b).splice(1, arr.length - 2)
    return arr
      }
  }

  //second attempt using the math.min/max methods and the spread keyword

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

