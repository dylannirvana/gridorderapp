import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Template } from 'meteor/templating';

import '../client/upload.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Items.findOne( { saleId: item.saleId } );

      if ( !exists ) {
        Items.insert( item );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  }
});
