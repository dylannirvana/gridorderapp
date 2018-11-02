import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Mongo } from 'meteor/mongo';
import './main.html';

export const Grid = new Mongo.Collection('grid');

Template.upload.onCreated( () => {
  Template.instance().uploading = new ReactiveVar( false )
})

Template.upload.helpers({
  uploading() {
    return Template.instance().uploading.get()
  },
  grid() {
    return Grid.find({});
  }
})

Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    // Handle the conversion and upload

    var fileInput = document.querySelector('input');

    // Parse local CSV file
    Papa.parse(fileInput.files[0], {
    	complete: function(results) {
    		console.log(results);
    	}
    });

// NOTE: Here is the full data as arrays
// TODO: See if it can handle the full BASECODES
// TODO: Grab the data points I need and dump the rest
// TODO: Build them into the card template
// NOTE: You may want to go over the Meteor manpages here
// NOTE: Meteor implementation
// TODO: Data cards with Isotope Packery
// TODO: Output CSV
// TODO: Integration into Magento

/*
Ok, I want to take each griditem 

*/
    // Papa.parse ( event.target.files[0], {
    //   header: true,
    //   complete( results, file ) {
    //     // Handle upload
    //     Meteor.call( 'parseUpload', results.data, ( error, response ) => {
    //       if ( error ) {
    //         Bert.alert( error.reason, 'warning' )
    //       } else {
    //         // Handle success
    //         template.uploading.set( false )
    //         Bert.alert( 'Upload complete! ', 'success', 'growl-top-right' )
    //       }
    //     })
    //   }
    // })
  }
})
