## GO App
Grid Order Application, is a tool that allows the company to use its taxonomies to control the order of product display, rather than a predetermined numerical grid order. By not requiring the user to deal with thousands of products at once, they can focus on the taxonomy they are already familiar with, and work only with catagories that concern them at the time. 

From a data point of view, a linear grid order, is inherently fragile and difficult to maintain. Each number in the array is dependent on the others. Changing even one creates a shift in the entire array. By just declaring the changes that are wanted, without destroying the LHS assignments, the data paradigm is more declarative.

### Philosophy
Agile. Declarative. Decoupled. <br>

The tool provides:
1) Easy draggability
2) Conveniently filter and sort 
3) Ability to take in a delta file and write to the production server, via CSV files

Looking at the app from the top, it takes a Delta CSV, parses to JSON. The new order will actually be asserted in the UI (Courtesy of the Isotope/Packery packages). That data object will then be parsed back to CSV and sent to a unique column in Magento called _neworder_. Only basecodes that have _neworder_ will ignore existing _gridorder_. Pseudocode: `if (neworder) ? neworder : gridorder`. Therefore, the data model is modular, maintainable and nondestructive.

ES6 and front-end frameworks that enjoy superpowers provided by React or Vue, use a virtual DOM. They are interested in pure (predictable) functions, declarative style, and better UX. 

### npm Packages
React. Bootstrap. Papaparse. Packery, Masonry, Draggabilly, Isotope.

### License
This open source software for the View is produced under the <a href='https://www.gnu.org/licenses/gpl-3.0.html'>GNU GPL license v3 </a>. See https://www.gnu.org/licenses/gpl-3.0.html for more information.
