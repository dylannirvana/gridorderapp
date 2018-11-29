import React from 'react';
import Product from "../Product/Product";

// all this does is take the input file and render it to the DOM
class ProductGrid extends React.Component{

    render() {
        console.log('GRID COMPONENT')
        console.log(this.props.feed)

        return (
            <div>

               {

                    Object.values(this.props.feed).map(product =>
                    <Product
                        key = {product.sku}
                        product = {product}
                    />
                    )
                }

            </div>
        )
    }


}

export default ProductGrid;

// refactor to parent as prop?

// // Handler Papa.parse converts CSV to JSON
// function uploadHandler(event) {
//   console.log('The event is registering ' + event.target) // Easy squeezy

//   const inventory = event.target.files[0];
//   console.log(inventory) // The array object

//   Papa.parse(inventory, {
//     header: true,
//     complete: function(results) { // Object with data. Err, meta to be handled later
//       console.log(results)

//       // let items = results.data; // Data to be passed to Grid, iterated over, and used by Packery, Draggabilly, and Isotope
//       // console.log(items)

//       const Items = results.data;
//       console.log(Items)
//     }
//   })
// }



// // INITIALIZE PACKERY
// var $grid = $('.grid').packery({
//   itemSelector: '.grid-item',
//   // gutter: 10,
//   // columnWidth helps with drop positioning
//   columnWidth: 240
// });

// // INITIALIZE DRAGGABILLY
// $grid.find('.grid-item').each( function( i, gridItem ) {
//   var draggie = new Draggabilly( gridItem );
//   // bind drag events to Packery
//   $grid.packery( 'bindDraggabillyEvents', draggie );
// });

// // // INITIALIZE ISOTOPE
// // var $grid = $('.grid').isotope({
// // $grid.isotope({
// //   getSortData: {
// //     name: '.name', // text from querySelector
// //     category2: '.category2',
// //     function2: '.function2',
// //     family: '.family'
// //     // category: '[data-category]' // value of attribute
// //   }
// // });




// import React, { Component } from 'react';
// import { Items } from '../ProductFeed';

// // TODO: Render items object from uploadHandler and iterate through in Bootstrap card
// // TODO: Must be made accessible to Packery, Draggabilly 
// const Grid = () => {
//     return (
//         <div className="row grid">
//             <Items />
//         </div>
//     );
// }

// export default Grid;

