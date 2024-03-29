// You are provided with a list (or array) of integer pairs. 
// Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

var number = function(busStops){
    return busStops.reduce((acc, curr) => (acc + curr[0]) - curr[1], 0)
  }