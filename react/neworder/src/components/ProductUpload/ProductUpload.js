import React from 'react'
// import React, { Component } from 'react'
import { Input, InputGroup } from 'reactstrap'
// import Papa from 'papaparse'
// import ProductGrid from '../ProductGrid'
import Parser from '../Parser'

// NOTE: This component shows the input, handles the upload, and exports the product object

// Here are some inspiring comments from https://react.org 
// "We recommend naming props from the component’s own point of view rather than the context in which it is being used."
// "All React components must act like pure functions with respect to their props."


// // Stateless component
// const ProductUpload = () => {

//     // Upload handler
//   const uploadHandler = (event) => {
//     const inventory = event.target.files[0]

//     Papa.parse(inventory, {
//       header: true,
//       complete: function(results) {  

//         let items = results.data;   
//         console.log(items)
//       }
//     })
//   } // END UploadHandler

//   return (
//     <div>
//       <InputGroup>
//         <Input 
//         type="file" 
//         name="inputCSV" 
//         onChange={uploadHandler}
//         />
//       </InputGroup>
//     </div>
//   )

// } // END ProductUpload



// // Stateful component
// class ProductUpload extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemList: []
//     }
//   }

// // state = {
// //   itemList: []
// // }

//   render() {

//     console.log(this.state) // this renders twice, once with [], then with object

//     const uploadHandler = (event) => {
//       event.preventDefault();
//       const inventory = event.target.files[0]
  
//       Papa.parse(inventory, {
//         header: true,
//         complete: function(results) {
  
//           const items = results.data;   
//           // console.log(this.state); // undefined
//           this.setState({ itemList: items })

//         }.bind(this) // binding was essential to this working
//       })
//     } // END UploadHandler

//     console.log(typeof(this.state))
//     console.log(this.itemList)

//     return (
//       <div>
//         <InputGroup>
//           <Input 
//           type="file" 
//           name="inputCSV" 
//           onChange={uploadHandler}
//           />
//         </InputGroup>
//       </div>
//     )
//   }
// }

// FIXME: Just the input, uses ProductGrid for the handler
const ProductUpload = (props) => {
  return (
    <div>
      <InputGroup>
        <Input 
        type="file" 
        name="inputCSV" 
        onChange={Parser.uploadHandler} // ?
        />
      </InputGroup>
    </div>
  )
}

export default ProductUpload

