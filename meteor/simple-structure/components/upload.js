import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Mongo } from 'meteor/mongo';
import './upload.html';

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
        let dataArray = results.data;
        console.log(dataArray[3]);
        // return dataArray;
        // This returns the array
        // for (var result in dataArray) {
        //   console.log(result);
        // }
        // return dataArray;
      //   results.forEach(function(result) {
      //   console.log(result);
      // });
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
