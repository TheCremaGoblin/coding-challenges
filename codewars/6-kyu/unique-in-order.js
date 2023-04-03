function uniqueInOrder(it) {
  var result = []
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== result[result.length - 1]) {
      result.push(it[i])
    }
  }
  return result
}