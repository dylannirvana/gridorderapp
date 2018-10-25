// import { Template } from 'meteor/templating';
// import './main.html';
//
// // I DONT KNOW HOW TO LINK THESE FILES. I TRIED AND FAILED
//
// Template.upload.onCreated( () => {
//   Template.instance().uploading = new ReactiveVar( false );
// });
//
// Template.upload.helpers({
//   uploading() {
//     return Template.instance().uploading.get();
//   }
// });
//
// Template.upload.events({
//   'change [name="uploadCSV"]' ( event, template ) {
//     // We'll handle the conversion and upload here.
//     Papa.parse( event.target.files[0], {
//       header: true,
//       complete( results, file ) {
//         // Handle the upload here.
//         console.log(event);
//       }
//     });
//   }
// });
