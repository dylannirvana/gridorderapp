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
    console.log(event);
    // We'll handle the conversion and upload here.
    Papa.parse( event.target.files[0], {
      header: true,
      complete( results, file ) {
        // Handle the upload here.
      }
    });
  }
});
