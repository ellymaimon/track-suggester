function tally(a1, a2, a3) {
  return a1 + a2 + a3;
}




$(function(){

  var answer1 = parseInt($("input:radio[name=q1]:checked").val());

  var answer2 = parseInt($("input:radio[name=q2]:checked").val());

  var answer1 = parseInt($("input:radio[name=q3]:checked").val());

  var answer1 = parseInt($("input:radio[name=q4]:checked").val());

  $('#question4 input:radio').addClass('input_hidden');
  $('#question4 label').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
  });


});
