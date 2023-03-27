function persistence(num) {
    var numCounter = 0;
    num = num.toString();
    
    while (num.length > 1) {
      numCounter++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }  
    return numCounter;
}