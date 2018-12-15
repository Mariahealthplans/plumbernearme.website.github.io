$(document).ready(function() {


    $('#btn-animated').on('click',function () {

       $('#display-1').addClass('animated fadeOutDown');
        $('#btn-animated').addClass('animated zoomOut');
        $('#display-1').fadeOut(500);

    })
         

  

});

$( document.body ).click(function () {
    if ( $( "div:first" ).is( ":hidden" ) ) {
      $( "div" ).slideDown( "slow" );
    } else {
      $( "div" ).any();
    }
  });

  $( "#clickme" ).click(function() {
    $( "#faucet" ).slideDown( "slow", function() {
    
     
    });

setTimeout(function() {
    $('#display-1').fadeIn(200);
    $('#btn-animated').fadeIn(200);
}, 500);

}); 

