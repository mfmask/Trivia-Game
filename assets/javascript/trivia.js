//Timer

setTimeout(ThirtySeconds, 30000);

$("#time-left").append("<h2>About 5Seconds Left!</h2>");

//Scoring
function submitAnswers () {
  var total = 5;
  var score = 0;
// player input
  var q1 = document.forms["matrixForm"]["q1"].value;
  var q2 = document.forms["matrixForm"]["q2"].value;
  var q3 = document.forms["matrixForm"]["q3"].value;
  var q4 = document.forms["matrixForm"]["q4"].value;
  var q5 = document.forms["matrixForm"]["q5"].value;

}
for(i = 1; i <= total;1++) {
  if(eval("q"+1) == null || eval("q"+1 == "") {
    alert ("You skipped question "+ i);
    return false;
}

}
//Correct answers
var = ["b","a","c","d","c"];

for(i = 1; i <= total;i++) {
  score++
}
