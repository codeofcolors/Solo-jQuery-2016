var redClicks = 0;
var yellowClicks = 0;
var greenClicks = 0;
var blueClicks = 0;

$(document).ready(function() {

    $('.color-button').first().on("click", function() {
        $('#red').html('Total red: ' + (redClicks += 1));
        var redDiv = $('<div class="color-cube red"></div>');
        $('.container').append(redDiv);
    });

    $('.color-button').eq(1).on("click", function() {
        $('#yellow').html('Total yellow: ' + (yellowClicks += 1));
        var yellowDiv = $('<div class="color-cube yellow"></div>');
        $('.container').append(yellowDiv);
    });

    $('.color-button').eq(2).on("click", function() {
        $('#green').html('Total Green: ' + (greenClicks += 1));
        var greenDiv = $('<div class="color-cube green"></div>');
        $('.container').append(greenDiv);
    });

    $('.color-button').eq(3).on("click", function() {
        $('#blue').html('Total blue: ' + (blueClicks += 1));
        var blueDiv = $('<div class="color-cube blue"></div>');
        $('.container').append(blueDiv);
    });
});
