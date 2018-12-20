// import React, { Component } from 'react'
// import Papa from 'papaparse'


// // // NOTE: This component imports the product object and renders it to the grid
// // // The grid template iterates through the product object
// // // and makes the draggery, packery, and isotope packages available to it

// // // The logic for the UI has to be taken up in a separate component
// // // That component has to make clear what the logic is as it works with the taxonomy
// // // What should it be called? What is purpose of that component?

// // // 1. to reorder PARTS of the gridorder using the TAXONOMY rather than the numeric value of the gridorder
// // // so only a subset of the products are received
// // // by filter, sort, and drag, a neworder is achieved
// // // 2. to teach how this is to be achieved. It has to be teachable

// //     // Upload handler
// //   const uploadHandler = (event) => {
// //     const inventory = event.target.files[0]

// //     Papa.parse(inventory, {
// //       header: true,
// //       complete: function(results) {  

// //         let items = results.data;   
// //         console.log(items)
// //       }
// //     })
// //   } // END UploadHandler

// // export default ProductGrid


// // FIXME:
// class ProductGrid extends Component {

//     uploadHandler = (props) => {
//         const inventory = props.event.target.files[0]
    
//         Papa.parse(inventory, {
//             header: true,
//             complete: function(results) {
//                 const items = results.data;   
//                 console.log(items) // lost this somehow
//             }
//         })
//     } // END UploadHandler

//     render() {
        
//         return (
//         <div>
//             Go crazy
//         </div>
//         )
//     }
// }

// export default ProductGrid