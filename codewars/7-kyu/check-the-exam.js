// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, 
//-1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let studentScore = 0;
  for (var i = 0; i < array2.length; i++) {
    if (array2[i] === ""){
        studentScore += 0
      } else if (array2[i] !== array1[i]) {
        studentScore -= 1;
      } else if (array2[i] === array1[i]){
        studentScore += 4
      } 
  }
    return studentScore < 0 ? 0 : studentScore
}