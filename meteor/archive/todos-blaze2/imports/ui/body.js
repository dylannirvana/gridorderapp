import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
tasks() {
  // show newest tasks at the top
  return Tasks.find({}, { sort: { createdAt: -1 } });
},
});

Template.body.events({
  'submit .new-task' (event) {

    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert task into collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    })

    // Clear form
    target.text.value = '';
  },
})
