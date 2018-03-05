$(document).ready(function(){


  if ($(window).width() > 769){
    $('.cardinfo').hide();

    $('.prjimg').hover(function(){
      $(this).siblings('div').fadeIn();
    });

    $('.cardinfo').mouseleave(function(){
      $('.cardinfo').fadeOut();
      });

      $( "#new" ).mouseenter(function() {
        $( "#new" ).animate({
              color: "white",
              backgroundColor: "#00911a",
              outlineColor: "white"
          });
        });
        $('#new').mouseleave(function(){
          $('#new').animate({
            color:"#333",
            backgroundColor:"white",


          })
        })
    };





  $('#fun').click(function(){
    $('#meow').get(0).play();
    $('#funexplode').fadeIn(0, function(){
      $(this).delay(400).fadeOut('fast');
      });
    });

    $('.hoverimg').hover(function(){
      $(this).attr('src', 'resources/1.png');
    });
    $('.hoverimg').mouseleave(function(){
      $(this).attr('src', 'resources/2.png')
    });
  });
