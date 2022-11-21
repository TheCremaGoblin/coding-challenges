//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).

function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }

//second attempt, using ternary, more compact to look at but not necessarily better

let rentalCarCost = d => {
    if (d >= 7) { return d * 40 - 50 }
    else if (d >= 3 && d < 7) { return d * 40 - 20 }
    else {
      return d * 40
      }
 }
