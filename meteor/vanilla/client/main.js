import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.grid.onCreated( () => {
  // Template.instance().grid = new ReactiveVar();
  this.grid = new ReactiveVar();
})


Template.grid.helpers({
  // grid() {
  //   return Template.instance().grid.get();
  // }
})

Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    const inventory = event.target.files[0];

    Papa.parse(inventory, {
      header: true,
    	complete: function(results) {

        let itemData = results.data;
        // console.log(template)

        return () => {
          Template.instance().grid.set(itemData)
        }
        // template.grid.set(itemData)

    	} // END complete
    }); // END parse

  } // END change
}) // END events
