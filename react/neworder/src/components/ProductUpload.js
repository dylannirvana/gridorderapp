import React, { Component } from 'react'
import { Input, InputGroup } from 'reactstrap'
// import Papa from 'papaparse'
import { uploadHandler } from './ProductGrid.js'

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
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     itemList: []
//   //   }
//   // }

//   render() {

//     this.setState = {
//       itemList: []
//     }

//     const uploadHandler = (event) => {
//       const inventory = event.target.files[0]
  
//       Papa.parse(inventory, {
//         header: true,
//         complete: function(results) {
  
//           const items = results.data;   
//           console.log(items)
//           this.setState({ itemList: items })
//         }
//       })
//     } // END UploadHandler
    
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

// Just the input
const ProductUpload = (props) => {
  return (
    <div>
      <InputGroup>
        <Input 
        type="file" 
        name="inputCSV" 
        onChange={props.uploadHandler}
        />
      </InputGroup>
    </div>
  )
}

export default ProductUpload


  // TODO: export the product grid
  // const ProductExport = () => {

  // }

  // // handle the export
  // const ExportHandler = (props) => {

  // }

  // QUESTION: What about parsing the output? Isn't weird to have the input function just sitting
  // there unused when the parser does an export?
  // No, have the import handler AND the export handler here

