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

    alert(total);

    if (total <= 5) {
      $("#results").text("You should take the CSS/React track");
    } else if (total > 5 && total <= 11) {
      $("#results").text("You should take the C#/.Net track.");
    } else if (total > 11) {
      $("#results").text("You should take the Ruby/Rails track.");
    } else {
      $("#results").text("Sorry, something went wrong! Please refresh the page and try again.");
    }

  });

});
