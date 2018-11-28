##GO App
GO App - Grid Order Application, is a tool that allows Circa to easily change its product grid order. This will function in a more manageable way than was done previously. By not requiring the user to deal with the entire grid order (thousands of products), they can focus on the catagories that concern them at the time. 

###Philosophy
Agile. Declarative. Decoupled. <br>

The tool provides:
1) Easy draggability
2) Conveniently filter and sort 
3) Ability to take in a delta file, and communicate with the production server, via CSV files

Looking at the app from the top, it takes a Delta CSV, parses to JSON. The new order will actually be asserted in the UI (Courtesy of the Isotope/Packery packages). That data object will then be parsed back to CSV and sent to a unique column in Magento called _neworder_. Only basecodes that have _neworder_ will ignore existing _gridorder_. Pseudocode: `if (neworder) ? neworder : gridorder`. Therefore, the data model is modular, maintainable and nondestructive.

ES6 and front-end frameworks that enjoy superpowers provided by React or Vue, use a virtual DOM. They are interested in pure (predictable) functions, declarative style, and better UX. 

###npm Packages
React. Bootstrap. Papaparse. Packery, Masonry, Draggabilly, Isotope.

###License
This open source software for the View is produced under the <a href='https://www.gnu.org/licenses/gpl-3.0.html'>GNU GPL license v3 </a>. See https://www.gnu.org/licenses/gpl-3.0.html for more information.
