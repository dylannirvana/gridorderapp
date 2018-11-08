import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// // if using db as linker
// import { Mongo } from 'meteor/mongo';

import './main.html';
// import '../server/main.js';

// collection can be set up as linker essentially
// export const Grid = new Mongo.Collection('items');

Template.upload.onCreated( () => {
  // Template.instance().uploading = new ReactiveVar( false )

  // create new ReactiveVar to hold the object
  this.grid = new ReactiveVar();
  // same as
  // Template.instance().grid = new ReactiveVar();
})

Template.grid.helpers({
  // grid() {
  //   return Template.instance().grid.get();
  // }
})

////////////////////////////////////////////////////////////////////
// NOTE: trying to figure out how to pass event object to template
Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    // template.reactiveData.set('New Value') // ?????

  // Handles the conversion and upload
    var fileInput = document.querySelector('[name="uploadCSV"]');

    // Parse local CSV file
    Papa.parse(fileInput.files[0], {
      header: true,
    	complete: function(results) {
    		// console.log(results); // includes data, error, and misc

// NOTE: This is the data object to send to the template
        let itemData = results.data;
        console.log(itemData) // here is the data object

        return template.grid.set(itemData);
        // same as
        // Template.instance().grid.set(itemData);

        // // This test correctly iterates over the object, but should be done in the template
        // itemData.forEach(function(item) {
        //   console.log(item)
        //   // console.log(item['itemcode'])
        // });

// HELP! How do I send the object itemData to the template?

        // grid() {
        //   return Template.instance().grid.set(itemData); // ????
        // }

        // return Template.instance().grid.set(itemData); // ?????

        // ReactiveVar.set('result', result); // ???
        // template.grid.set(itemData);

    	} // END complete
    }); // END parse


  } // END change
}) // END events

////////////////////////////////////////////////////////////////////

// // This is the event template with Bert and error handling using collection.
// // It would replace the event handler above. This is NOT un-commentable to run.
//     Papa.parse ( event.target.files[0], {
//       header: true,
//       complete( results, file ) {
//         // Handle upload
//         Meteor.call( 'parseUpload', results.data, ( error, response ) => {
//           if ( error ) {
//             Bert.alert( error.reason, 'warning' )
//           } else {
//             // Handle success
//             template.uploading.set( false )
//             Bert.alert( 'Upload complete! ', 'success', 'growl-top-right' )
//           }
//         })
//       }
//     }) // END verbose papa parse
