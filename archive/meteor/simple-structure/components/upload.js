import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Mongo } from 'meteor/mongo';
import './upload.html';
import './card.html';

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
      header: true,
      complete: function(results) {
        // console.log(results);
        // return results; // doesn't exist outside of function
        // refactor into its own function?
        let items = results.data;
        return Template.card.helpers({
          items:items
        })
        // itemData.forEach(function(item) {
        //   console.log(item) // this returns the json fine
        // }); // this works
      }
    });
    // this statement does not have access to the variable
    // console.log('Hullo from outside the calling function  ' + dataArray)
  }
})
// dataArray.forEach()
/*
loop through the array
show that i can grab the data
put the pieces in the template
results.forEach(function(result) {
console.log(result);
})

*/
