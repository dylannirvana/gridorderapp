import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Grid } from '../api/grid.js';
import './grid.html';

Template.grid.onCreated( () => {
  Template.instance().grid = new ReactiveVar();
})

Template.grid.helpers({
  grid() {
    // return Template.instance().grid.get();
    return Grid.find({})
  },
})

Template.grid.events({
  'change [name="uploadCSV"]' ( event, template ) {
    const inventory = event.target.files[0];

    Papa.parse(inventory, {
      header: true,
    	complete: function(results) {

        let itemData = results.data;
        console.log(itemData);

        Grid.insert({
          itemData,
        })

    	} // END complete
    }); // END parse

  } // END change
}) // END events
