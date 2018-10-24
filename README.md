##Grid Order Application##

The Grid Order App is a responsive, tablet friendly cloud application, that will show
1) Easy draggability
2) Filter and sort business logic
3) Use a Data model that will allow it to take in a delta file, and communicate with the production server, via .csv files

Looking at the app from a MVC (Model View Controller) actually helps talk about it. (Though it is not strictly MVC!)

The View has the UI and logic of the application. Because the new order will actually be asserted in the UI (Courtesy of the Isotope/Packery packages), it will be persistent. Hence, the View sits (inside a templating engine) inside a Meteor implementation. That gives it access to its own Mini Mongo client-side database, independent of browser or local storage.

Because its a Meteor implementation, the Model is contained within it as well. Though, its pretty easy; it is basically a Vanilla conversion of CSV 2 JSON, via Papa Parse.

This makes the Meteor the "traffic" controller, between the Model and the View. Going back to the templating engine, right now its Blaze, because its native to Meteor. But because Meteor is agnostic, it will be easy enough to move it over to React or to Vue, once I am sure it all works.

The last point, is the confusion caused by using jQuery: developers often lose the line between the two. The other problem, worse in fact, is that its whole thing is DOM manipulation.

ES6 and front-end frameworks that enjoy its superpowers like React and Vue, are going in a completely different direction. They have no interest in manipulating the DOM. They are interested in pure functions, declarative style, and the Module pattern.

Finally, by developing the GO App in this way, as a kind of discovery (hey I never built one before), it may actually lead to some unexpected places.



This open source software for the View is produced under the <a href='https://www.gnu.org/licenses/gpl-3.0.html'>GNU GPL license v3 </a>. See https://www.gnu.org/licenses/gpl-3.0.html for more information.
