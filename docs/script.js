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

// FILTER
// // Isotope sort and filter
// var $gridi = $('.gridi').isotope({
//   getSortData: {
//     name: '.name', // text from querySelector
//     category: '[data-category]', // value of attribute
//     // weight: function( itemElem ) { // function
//     //   var weight = $( itemElem ).find('.weight').text();
//     //   return parseFloat( weight.replace( /[\(\)]/g, '') );
//     // }
//   }
// })

// init Isotope
// var $gridi = $('.gridi').isotope({
//   // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $gridi.isotope({ filter: filterValue });
// });


// SORT
var $gridt = $('.gridt').isotope({
  getSortData: {
    name: '.name', // text from querySelector
    category: '[data-category]' // value of attribute
  }
});

// filter
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $gridt.isotope({ filter: filterValue });
});

// $gridt.isotope({ sortBy : 'category' });

// sort items on button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $gridt.isotope({ sortBy: sortByValue });
  console.log("hey now!");
});
