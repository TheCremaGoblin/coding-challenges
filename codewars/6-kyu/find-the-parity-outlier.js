// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let evenNums = [];
    let oddNums = [];
    
    integers.forEach(element => {
      element % 2 === 0 ? evenNums.push(element) : oddNums.push(element)
    })
    
    return evenNums.length > oddNums.length ? Number(oddNums.join('')) : Number(evenNums.join(''));
}

//a better solution! Only going through the first 3 elements of the array in order to figure out the result, before filtering the whole array once

function findOutlier(integers){
    var isOdd = (integers[0] % 2 == 0 ? 1 : -1) + 
        (integers[1] % 2 == 0 ? 1 : -1) +
        (integers[2] % 2 == 0 ? 1 : -1)
    
    return isOdd < 0 ? integers.filter((x)=> x % 2 == 0)[0] : integers.filter((x) => x % 2 != 0)[0]
    
}