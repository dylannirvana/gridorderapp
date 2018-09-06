// Initializes with jQuery
// $('.grid').packery({
//   // options
//   itemSelector: '.grid-item',
//   gutter: 10
// });

// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  gutter: 10,
  // columnWidth helps with drop positioning
  columnWidth: 260
});

// make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});
