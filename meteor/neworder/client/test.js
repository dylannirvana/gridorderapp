import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Packery } from 'packery';
  console.log("Packery contructor is " + Packery + ". Why?") // undefined
  console.log("However, packery is a " + packery + ".") // function
import { Draggabilly } from 'draggabilly';
import './main.html';

Template.grid.onCreated(function gridOnCreated() {
  this.items = new ReactiveVar();
});

Template.grid.helpers({
  items() {
    return Template.instance().items.get(false);
  },
});

Template.grid.onRendered(function() {
  var elem = document.querySelector('.grid');
  // INITIALIZE PACKERY
  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 240
  });
  // DRAGGABILLY
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });
})

Template.grid.events({
    'change [name="uploadCSV"]' ( event, template ) {
      const inventory = event.target.files[0];

      Papa.parse(inventory, { // works like a charm
        header: true,
      	complete: function(results) {

          let items = results.data;
          template.items.set(items); // {{#each item of items}} etc.

      	} // END complete
      }); // END parse
  }, // change
}); // events
