// Warn the sheep in front of the wolf that it is about to be eaten. 
// Remember that you are standing at the front of the queue which is at the end of the array:
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }
