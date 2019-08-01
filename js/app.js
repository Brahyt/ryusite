$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-ready').show();
        $('.ryu-still').hide();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken()
        $('.ryu-throwing').show();
        $('.ryu-ready').hide();
        $('.hadouken').finish().show().animate(
            {'left' : "1020px"}, 
            500,
            function() {
                $('.hadouken').hide();
                $('.hadouken').css('left' , '568px');
            }
        );
    })
    
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    })

    $(document).keydown(function(x) {
        if(x.keyCode === 88) {
            $('.ryu-cool').show();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
        }
    })
    $(document).keyup(function(x) {
        if(x.keyCode === 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    })

});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }