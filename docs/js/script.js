// DRAGGABILLY
// INITIALIZE PACKER
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // gutter: 10,
  // columnWidth helps with drop positioning
  columnWidth: 240
});


// NOTE: There is a sizing issue with the column



// Make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});
// END Draggabilly


// HIDE AND SHOW
// When document is loaded, only category buttons are visible
$( document ).ready(function() {
  $('.sub, .fam, .des').hide();
});

// Click a category button, and the sub-category buttons show
// $('.cat').on( 'click', 'button', function() {
//   $('.sub').show(500);
// });

$('.ceiling-btn').on( 'click', function() {
  $('.ceiling-btn-group').show(500);
});

$('.wall-btn').on( 'click', function() {
  $('.wall-btn-group').show(500);
});

$('.table-btn').on( 'click', function() {
  $('.table-btn-group').show(500);
});

$('.floor-btn').on( 'click', function() {
  $('.floor-btn-group').show(500);
});

$('.outdoor-btn').on( 'click', function() {
  $('.outdoor-btn-group').show(500);
});


// Click sub-category button, the family buttons show
$('.sub').on( 'click', 'button', function() {
  $('.fam').show(500);
});



// // INITIALIZE ISOTOPE
// var $gridt = $('.gridt').isotope({
//   getSortData: {
//     name: '.name', // text from querySelector
//     category: '[data-category]' // value of attribute
//   }
// });


// // FILTER CATEGORY
$('.cat').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter'); // eg ceiling selected
  $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
});

// // // // FILTER FUNCTION
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $gridt.isotope({ filter: filterValue });
// });

// // // $gridt.isotope({ sortBy : 'category' });
// //
// // sort items on button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $gridt.isotope({ sortBy: sortByValue });
// });
