// INITIALIZE PACKERY
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // gutter: 10,
  // columnWidth helps with drop positioning
  columnWidth: 240
});

// // INITIALIZE ISOTOPE
// var $grid = $('.grid').isotope({
// $grid.isotope({
//   getSortData: {
//     name: '.name', // text from querySelector
//     category2: '.category2',
//     function2: '.function2',
//     family: '.family'
//     // category: '[data-category]' // value of attribute
//   }
// });




// DRAGGABILLY
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});

// NOTE: There is a sizing issue with the column

// // HIDE AND SHOW BUTTONS
$( document ).ready(function() {
  $('.sub, .fam, .des').hide();
});

// selectively show functions
$('.ceiling-btn').on( 'click', function() {
  // $('.sub').hide();
  $('.ceiling-btn-group').show(500);
});

$('.wall-btn').on( 'click', function() {
  // $('.sub').hide();
  $('.wall-btn-group').show(500);
});

$('.table-btn').on( 'click', function() {
  // $('.sub').hide();
  $('.table-btn-group').show(500);
});

$('.floor-btn').on( 'click', function() {
  // $('.sub').hide();
  $('.floor-btn-group').show(500);
});

$('.outdoor-btn').on( 'click', function() {
  // $('.sub').hide();
  $('.outdoor-btn-group').show(500);
});

// $('.category-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $('.sub').hide();
//   $(filterValue).show(500);
// });


// selectively show families
$('.ceiling-family-btn').on( 'click', function() {
  $('.ceiling-family-btn-group').show(500);
});

$('.wall-family-btn').on( 'click', function() {
  $('.wall-family-btn-group').show(500);
  console.log('yo!')
});
$('.table-family-btn').on( 'click', function() {
  $('.table-family-btn-group').show(500);
});

$('.floor-family-btn').on( 'click', function() {
  $('.floor-family-btn-group').show(500);
});

$('.outdoor-family-btn').on( 'click', function() {
  $('.outdoor-family-btn-group').show(500);
});

// $('.function-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $(filterValue).show(500);
// });


// FILTER CATEGORY
$('.category-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter'); // eg ceiling selected
  $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
});

// $('.ceiling-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
// });
//
// $('.wall-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
// });
//
// $('.floor-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
// });
//
// $('.outdoor-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
// });

$('.function-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter'); // eg ceiling selected
  $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
});

$('.family-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter'); // eg ceiling selected
  $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
});

// show item order after layout
function orderItems() {
  var itemElems = $grid.packery('getItemElements');
  $( itemElems ).each( function( i, itemElem ) {
    $( itemElem ).text( i + 1 );
  });
  // console.log(itemElems);
}

$('.save-btn').on( 'click', 'button', function() {
  $grid.on( 'layoutComplete', orderItems );
  $grid.on( 'dragItemPositioned', orderItems );
  var elems = $grid.isotope('getItemElements')
  console.log(elems);
});


// $('.family-filter').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter'); // eg ceiling selected
//   $grid.isotope({ filter: filterValue }); // eg show ceiling in cards
// });

// $grid.isotope({
//   getSortData: {
//     adele: '.adele',
//     bellvale: '.bellvale',
//     heather: '.heather'
//   }
// });

// filter metal, sort by number, and layout
// $grid.isotope({
//   filter: '.family',
//   sortBy: 'adele'
// });
// // triggering method without options will
// // re-apply filtering, sorting, and layout
// $grid.isotope();

//
// // sort items on button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $grid.isotope({ sortBy: sortByValue });
// });

// SORT
// $('.ceiling-family-btn-group').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by'); // eg ceiling selected
//   $grid.isotope({ sortBy: sortByValue }); // eg show ceiling in cards
//   console.log(sortByValue);
// });


// $('.sortIt').on('click', function() {
//   // var sortByValue = $(this).attr('data-sort-by');
//   // $grid.isotope({ sortBy: sortByValue });
//   $grid.isotope({ sortBy : 'bellvale' });
//   console.log('ouch!')
// });

// sort items on button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   // var sortByValue = $(this).attr('data-sort-by');
//   // $grid.isotope({ sortBy: sortByValue });
//   // $grid.isotope({ sortBy : 'random' });
//   $grid.isotope({ sortBy : 'name' });
// });


//
// // sort items on button click
// $('.sort-by-button-group').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $grid.isotope({ sortBy: sortByValue });
// });
