var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var buttonReset = document.querySelector('.reset');
buttonReset = fizzyUIUtils.makeArray( buttons );

buttonReset.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.reset' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});
