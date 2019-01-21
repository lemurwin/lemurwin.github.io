$(document).ready(function(){


  if ($(window).width() > 769){
    $('.cardinfo').hide();

    $('.prjimg').hover(function(){
      $(this).siblings('div').fadeIn();
    });

    $('.cardinfo').mouseleave(function(){
      $('.cardinfo').fadeOut(250);
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

const socialProfiles={
  Facebook:{
        link: 'https://www.facebook.com/merwin.miles',
        image: 'fa fa-facebook'},
  LinkedIn:{
        link:'https://www.linkedin.com/in/miles-merwin-08a718bb/',
        image: 'fa fa-linkedin'},
  GitHub:{
        link: 'https://www.github.com/lemurwin',
        image: 'fa fa-github-alt'}
  };

const divBegin = '<a href="';
const divSpec = '"><div class="col-xs-4"><p><i class="';
const divEnd= '" aria-hidden="true"></i></p></div></a>'
$.each(socialProfiles, function(key, value){
  $('#footer').append(divBegin + value.link + divSpec + value.image + divEnd);
});
const currentYear = (new Date).getFullYear();
$('#footer').append('<div class="row" style="padding-top:10px"><div class="col-sm-6 col-sm-offset-3" ><p style="color:black;">&copy;Miles Merwin '+ currentYear +'</p></div></div>')


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
