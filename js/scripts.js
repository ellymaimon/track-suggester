// Back-End
function tally(a1, a2, a3, a4, a5) {
  return a1 + a2 + a3 + a4 + a5;
}

// Front-End
$(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var userName = $("input#nameInput").val();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());


    var total = tally(answer1, answer2, answer3, answer4, answer5);

    $(".customName").text(userName);

    if (total <= 5) {
      $("#result-1").show();
    } else if (total > 5 && total <= 11) {
      $("#result-2").show();
    } else if (total > 11) {
      $("#result-3").show();
    } else {
      $("#result-4").show();
    }

    window.location.hash = '#result-1'
    window.location.hash = '#result-2'
    window.location.hash = '#result-3'
    window.location.hash = '#result-4'

  });

  $("button#reset").click(function(){
    $("#result-1").hide();
    $("#result-2").hide();
    $("#result-3").hide();
    $("#result-4").hide();
    $("#survey")[0].reset();
    window.location.hash = '#survey'

  });

});
