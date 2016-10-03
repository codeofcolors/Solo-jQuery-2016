var numOfClicks = 0;
// var red;
// var yellow;
// var green;
// var blue;

$(document).ready(function() {


  $('.color-button').first().on("click", function() {
    numOfClicks = numOfClicks+1;
  $('#red').html('Total red:' + numOfClicks);
      $('color-cube').data('data-color', 'red');
      $('div').css("background-color", "red");
      $('div').addClass("color-cube");

});


    $('.color-button').eq(1).on("click", function() {
      numOfClicks = numOfClicks+1;
      $('#yellow').html('Total yellow' + numOfClicks);
      $('color-cube').data('data-color', 'yellow');
      $('div').css("background-color", "yellow");
        $('div').addClass("color-cube");


    });

    $('.color-button').eq(2).on("click", function() {
      numOfClicks = numOfClicks + 1;
    $('#green').html('Total Green' + numOfClicks);
      $('color-cube').data('data-color', 'green');
      $('div').css("background-color", "green");
        $('div').addClass("color-cube");
    });

    $('.color-button').eq(3).on("click", function() {
      numOfClicks = numOfClicks + 1;
    $('#blue').html('Total blue' + numOfClicks);
      $('color-cube').data('data-color', 'blue');
      $('div').css("background-color", "blue");
        $('div').addClass("color-cube");

    });



  });
