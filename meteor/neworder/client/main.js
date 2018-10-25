// // import '../imports/ui/body.js';
//
// import { Template } from 'meteor/templating';
//
// // import './body.html';
// import './main.html';
//
// // Template.body.helpers({
// //   // tasks: [
// //   //   { text: 'This is task 1' },
// //   //   { text: 'This is task 2' },
// //   //   { text: 'This is task 3' },
// //   // ],
// // });

import { Template } from 'meteor/templating';
import './main.html';

Template.upload.onCreated( () => {
  Template.instance().uploading = new ReactiveVar( false );
});

Template.upload.helpers({
  uploading() {
    return Template.instance().uploading.get();
  }
});

Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    console.log("This is the event from the handler " + event);
    // We'll handle the conversion and upload here.
      Papa.parse( event.target.files[0], {
      header: true,
      complete( results, file ) {
        console.log(" This is the results object from PP " + results)
        console.log("event.target.files[0] here " + event.target.files[0] )
        // Handle the upload here.
        Meteor.call( 'parseUpload', results.data, ( error, response ) => {
         if ( error ) {
           Bert.alert( error.reason, 'warning' );
         } else {
           // Handle success here.
         }
       });
      }
    });
  }
});
