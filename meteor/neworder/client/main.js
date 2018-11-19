var packery = require('packery');
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Packery } from 'packery';
// console.log("Packery contructor is " + Packery + ". Why?")
// console.log("However, packery is a " + packery + ".")

// import { Draggabilly } from 'draggabilly';
// // console.log("Draggabilly contructor is " + Draggabilly + ". Why?")
// // console.log("However, draggabilly is a " + draggabilly + ".")

import './main.html';


Template.grid.onCreated(function gridOnCreated() {
  this.items = new ReactiveVar();
  const $grid = $('.grid').packery({
    itemSelector: '.grid-item'
  })
  console.log($grid)
});

Template.grid.helpers({

  items() {
    return Template.instance().items.get(false);
  },

});

Template.grid.events({
    'change [name="uploadCSV"]' ( event, template ) {
      const inventory = event.target.files[0];

      Papa.parse(inventory, {
        header: true,
      	complete: function(results) {

          let items = results.data;
          template.items.set(items);

      	} // END complete
      }); // END parse

  }, // change
}); // events
