// Initializes with jQuery
// $('.grid').packery({
//   // options
//   itemSelector: '.grid-item',
//   gutter: 10
// });

// change grid to gridp to avoid clash with Bootstrap global ?
// grid-item however is safe

// initialize Packery
var $gridp = $('.gridp').packery({
  itemSelector: '.grid-item',
  // gutter: 10,
  // columnWidth helps with drop positioning
  // columnWidth: 300
});

// make all grid-items draggable
$gridp.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $gridp.packery( 'bindDraggabillyEvents', draggie );
});
