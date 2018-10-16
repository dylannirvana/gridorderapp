

// INITIALIZE PACKER
var $gridp = $('.gridp').packery({
  itemSelector: '.grid-item',
  // gutter: 10,
  // columnWidth helps with drop positioning
  // columnWidth: 300
});

// Make all grid-items draggable
$gridp.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $gridp.packery( 'bindDraggabillyEvents', draggie );
});


// // INITIALIZE ISOTOPE
// var $gridt = $('.gridt').isotope({
//   getSortData: {
//     name: '.name', // text from querySelector
//     category: '[data-category]' // value of attribute
//   }
// });
//
// // HIDE AND SHOW BUTTONS
// // This is a hide/show of buttons using isotope. Maybe write separate function for this.
// // $gridt.isotope({ filter: ':not(.gridt)' });
//
// // $( document ).ready(function() {
// //   $('.ceiling').hide();
// // });
// //
// // $('.filter-button-group').click(function() {
// //   console.log('sup');
// //   $('.ceiling').show().animate({duration: 5000});
// // })
//
// // FILTER CATEGORY
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $('.sort-button-group').filter(filterValue).css( "color", "red");
//   $gridt.isotope({ filter: filterValue }); // eg show ceiling in cards
// });
//
// // // FILTER FUNCTION
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $gridt.isotope({ filter: filterValue });
// });
//
// // // $gridt.isotope({ sortBy : 'category' });
// //
// // sort items on button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $gridt.isotope({ sortBy: sortByValue });
// });
