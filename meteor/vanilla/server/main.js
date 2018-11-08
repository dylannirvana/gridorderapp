// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';
//
// // import '../client/main.js'; // you don't need this linker because it is not in the imports directory
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });
//
// Meteor.methods({
//   parseUpload( data ) {
//     check( data, Array );
//
//     for (let i = 0; i < data.length; i++) {
//       let item = data[ i ],
//       exists = Grid.findOne({ itemcode: item.itemcode })
//
//       if ( !exists ) {
//         Grid.insert ( item )
//       } else {
//         console.warn( 'Rejected. This item already exists Jack!')
//       }
//     }
//   }
// })
