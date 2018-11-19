var packery = require('packery');
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Packery } from 'packery';

import './main.html';


Template.grid.onCreated(function gridOnCreated() {
  this.items = new ReactiveVar();

  // $('.grid').packery({
  //   // options
  //   itemSelector: '.grid-item',
  //   gutter: 10
  // });

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
