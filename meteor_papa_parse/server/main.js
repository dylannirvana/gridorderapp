import { Meteor } from 'meteor/meteor';
import { Papa } from 'meteor/harrison:papa-parse';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Sales.findOne( { saleId: item.saleId } );

      if ( !exists ) {
        Sales.insert( item );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  }
});
});
