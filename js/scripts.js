$(document).ready(function(){

  var questionIndex = 0;

  var  questions = ["#userNameDiv","#userTestDiv"]

  // Next button
  $("#nextBtn").click(function(event){
    event.preventDefault();
    if(questionIndex < questions.length - 1){
      $(questions[questionIndex]).hide();
      questionIndex++;
      $(questions[questionIndex]).show();
      $("#prevBtn").show();
    }
    if(questionIndex === questions.length -1){
     $("#nextBtn").hide();
     $("#doneBtn").show();
   }
  });

  // Prev button
  $("#prevBtn").click(function(event){
    event.preventDefault();
    if(questionIndex >= 1){
      $(questions[questionIndex]).hide();
      questionIndex--;
      $(questions[questionIndex]).show();
      $("#nextBtn").show();
      $("#doneBtn").hide();
    }
    if(questionIndex === 0){
     $("#prevBtn").hide();
   }
  });
  
  // Done button
  $("#userInfo").submit(function(event){
    event.preventDefault();
    var name = $("#userName").val();

    console.log(name);
  });
});
