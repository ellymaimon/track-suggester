function tally(a1, a2, a3, a4, a5) {
  return a1 + a2 + a3 + a4 + a5;
}

$(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());

    alert(answer1);
    alert(answer2);
    alert(answer3);
    alert(answer4);
    alert(answer5);
  });
});
