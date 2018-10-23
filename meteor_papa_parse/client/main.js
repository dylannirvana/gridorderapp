import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Papa } from 'meteor/harrison:papa-parse';
import { Bert } from 'meteor/themeteorchef:bert';
import { FontAwesome } from 'meteor/fortawesome:fontawesome';

import './main.html';

// Template.upload.onCreated( () => {
//   Template.instance().uploading = new ReactiveVar( false );
// });
//
// Template.upload.helpers({
//   uploading() {
//     return Template.instance().uploading.get();
//   }
// });

// Template.upload.events({
//   'change [name="uploadCSV"]' ( event, template ) {
//     // We'll handle the conversion and upload here.
//   }
// });

// Template.upload.events({
//   'change [name="uploadCSV"]' ( event, template ) {
//     Papa.parse( event.target.files[0], {
//       header: true,
//       complete( results, file ) {
//         // Handle the upload here.
//       }
//     });
//   }
// });

// Template.upload.events({
//   'change [name="uploadCSV"]' ( event, template ) {
//     Papa.parse( event.target.files[0], {
//       header: true,
//       complete( results, file ) {
//         Meteor.call( 'parseUpload', results.data, ( error, response ) => {
//           if ( error ) {
//             Bert.alert( error.reason, 'warning' );
//           } else {
//             // Handle success here.
//           }
//         });
//       }
//     });
//   }
// });

Template.upload.events({
  'change [name="uploadCSV"]' ( event, template ) {
    template.uploading.set( true );

    // Papa.parse(uploadCSV.files[0], {
    // 	complete: function(results) {
    // 		console.log(results);
    // 	}
    // });

    Papa.parse( event.target.files[0], {
      header: true,
      complete( results, file ) {
        console.log('dude');
        Meteor.call( 'parseUpload', results.data, ( error, response ) => {
          if ( error ) {
            console.log( error.reason );
          } else {
            template.uploading.set( false );
            Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
          }
        });
      }
    });
  }
});
