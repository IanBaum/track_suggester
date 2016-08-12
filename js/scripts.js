$(document).ready(function(){

  var questionIndex = 0;
  var trackIndex = 0;
  var appIndex = 0;

  var questions = ["#userNameDiv","#question1","#question2","#question3","#question4","#question5",]
  var tracks = ["C#/.NET", "CSS/Design", "Java/Android", "PHP/Drupal", "Ruby/Rails"]
  var apps = ["in house buisness software", "user interfaces for websites and apps", "android and enterprise apps", "content heavy websites", "interactive websites"]

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
    var language = tracks[trackIndex];
    var app = apps[trackIndex];

    var= softOrWeb = parseInt($("#softOrWeb").val());
    var= desktopOrMobile = parseInt($("#sdesktopOrMobile").val());
    var= frontOrBack = parseInt($("#frontOrBack").val());
    var= interactiveData = parseInt($("#interactiveData").val());
    var= dataManage = parseInt($("#dataManage").val());

    if()

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
