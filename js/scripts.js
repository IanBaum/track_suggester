$(document).ready(function(){

  var questionIndex = 0;

  var  questions = ["#userNameDiv","#question1","#question2","#question3","#question4","#question5",]

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
    var name = $("#userName").val().toLowerCase().replace(/\b[a-z]/g, function(letter){return letter.toUpperCase();});
    var language = 0;
    var app = 0;

    $("#name").text(name);
    $("#language").text(language);
    $("#app").text(app);

    $("#questionJumbo").hide();
    $("#answerJumbo").show();
  });
  // Reset button
  $("#resetBtn").click(function(event){
    event.preventDefault();
    history.go(0);
  });
});
