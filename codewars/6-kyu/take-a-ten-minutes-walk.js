// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- 
// everytime you press the button it sends you an array of one-letter strings representing directions to walk 
// (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) 
// and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let xDirection = 0;
    let yDirection = 0;
  
    walk.forEach((dir) => {
      switch (dir) {
        case 'n': {
          xDirection++;
          break;
        }
        case 's': {
          xDirection--;
          break;
        }
        case 'w': {
          yDirection++;
          break;
        }
        case 'e': {
          yDirection--;
          break;
        }
        default:
          throw new Error('unknown direction');
      }
    });
    if (xDirection !== 0 || yDirection !== 0) return false;
    return true;
  }