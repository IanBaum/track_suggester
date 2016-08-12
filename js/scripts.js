$(document).ready(function(){

  var questionIndex = 0;
  var trackIndex = 0;

  var questions = ["#userNameDiv","#question1","#question2","#question3","#question4","#question5","#question6"]
  var tracks = ["C#/.NET", "CSS/Design", "Java/Android", "PHP/Drupal", "Ruby/Rails"]
  var apps = ["in house buisness software", "user interfaces for websites and apps", "android and enterprise apps", "content heavy websites", "interactive websites"]
  var trackImgs1 = ["img/c-sharp.png", "img/css.png", "img/java.png", "img/php.png", "img/ruby.png"];
  var trackImgs2 = ["img/dot-net.png", "img/design.png", "img/android.png", "img/drupal.png", "img/rails.png"];

  // Next button
  $("#nextBtn").click(function(event){
    event.preventDefault();
    if(questionIndex < questions.length - 1 ){
      $(questions[questionIndex]).hide();
      questionIndex++;
      $(questions[questionIndex]).show();
      $("#prevBtn").show();
    }
    if(questionIndex === questions.length - 1){
     $("#nextBtn").hide();
     $("#doneBtn").show();
     $("nameError").hide();
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

    var softOrWeb = parseInt($("#softOrWeb").val());
    var desktopOrMobile = parseInt($("#desktopOrMobile").val());
    var frontOrBack = parseInt($("#frontOrBack").val());
    var interactiveData = parseInt($("#interactiveData").val());
    var dataManage = parseInt($("#dataManage").val());
    var location = parseInt($("#location").val())

    if(location < 2){ //if location is not philly
      if(softOrWeb === 0){ //if software check for mobile or desktop
        if(desktopOrMobile === 0){ //if desktop set track to C#
          trackIndex = 0;
        }else if(desktopOrMobile === 0){ //if mobile or both set track to Java
          trackIndex = 2;
        }else{
          trackIndex = 2;
        }
      }else if(frontOrBack === 0){ // if website and frontend set CSS
        trackIndex = 1;
      }else if(interactiveData === 0){ //if website and interactive set Ruby
        trackIndex = 4;
      }else if(dataManage === 0){ //if website and datamange set php
        trackIndex = 3;
      }else{ //otherwise choose java
        trackIndex = 2;
      }
    }else{ //if location is philly
      trackIndex = 3;
    }

    var name = $("#userName").val().toLowerCase().replace(/\b[a-z]/g, function(letter){return letter.toUpperCase();});
    var language = tracks[trackIndex];
    var app = apps[trackIndex];
    var img1 = trackImgs1[trackIndex];
    var img2 = trackImgs2[trackIndex];

    $("#name").text(name);
    $("#language").text(language);
    $("#app").text(app);
    $("#trackImg1").attr("src", img1);
    $("#trackImg2").attr("src", img2);

    $("#questionJumbo").hide();
    $("#answerJumbo").show();
  });

  // Reset buttons
  $("#resetBtn").click(function(event){
    event.preventDefault();
    history.go(0);
  });
  $("#resetNav").click(function(){
    history.go(0);
  });
});
