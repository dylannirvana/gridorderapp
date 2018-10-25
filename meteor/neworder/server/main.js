import { Meteor } from 'meteor/meteor';
// import { '../client/mail.js' };

Meteor.startup(() => {
  // code to run on server at startup
});

// DOES THIS GO HERE I WONDER?
// I NEED TO USE MY REAL DATA . OY!
// WHERE DO I GRAB THE COLUMNS THAT I WANT AND DITCH THE REST?
// I AM USING PRODUCTS-DELTA-CLARKSON-101618-232720 AS REAL TEST Data

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
