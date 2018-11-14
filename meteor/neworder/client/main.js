import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.grid.onCreated(function gridOnCreated() {
  // counter starts at 0
  this.items = new ReactiveVar();
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
          // console.log(items);

          // items.forEach( function(items) {
          //   console.log(items)
          //
          // })

          template.items.set(items);

      	} // END complete
      }); // END parse


  },
});
