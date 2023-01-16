//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    let avgNum = (s1 + s2 + s3) / 3;
    if (avgNum >= 90){
      return 'A'
    } else if (avgNum >= 80){
      return 'B'
    } else if (avgNum >= 70){
      return 'C'
    } else if (avgNum >= 60){
      return 'D'
    } else {
      return 'F'
    }
  }

  //second attempt, slightly easier to read formatting

  function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }