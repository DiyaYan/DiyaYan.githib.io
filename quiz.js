function check(){
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var result=document.getElementById("result");
  var quiz=document.getElementById("quiz");

    if (q1=="Safety Compliance"){c++}
  if (q2=="Central Queensland University"){c++}
  if (q3=="All of the above"){c++}
  if (q4=="All of the above and more!"){c++}
  quiz.style.display="none";
  
  if (c===0) { 
    result.textContent= "That wasn't your best effort - you didn't get a single answer correct.";
  }
  if (c===1) { 
    result.textContent= "There's room for improvement there! You only got one correct answer.";
    }
    if (c===2) { 
      result.textContent= "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
    }
    if (c===3) { 
      result.textContent= "Congratulations! You got a good score of 3 out of 4 for your responses. You know Diya pretty well!";
    }
    if (c===4) { 
      result.textContent= "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Diya so well!";
    }




}