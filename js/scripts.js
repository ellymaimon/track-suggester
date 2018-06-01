// Back-End
function tally(a1, a2, a3, a4, a5) {
  return a1 + a2 + a3 + a4 + a5;
}

function decide(someTally) {
  if (someTally <= 5) {
    return var option = "CSS/React Track";
  } else if (someTally > 5 && someTally <= 11) {
    return var option = "C#/.Net Track";
  } else if (someTally > 11) {
    return var option = "Ruby/Rails Track";
  }
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

    alert(userName);

    var total = tally(answer1, answer2, answer3, answer4, answer5);

    alert(total);

    decide(total);



  });
});
