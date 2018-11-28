import React, { Component } from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';



  const UploadHandler = (event) => {
    const inventory = event.target.files[0];

    Papa.parse(inventory, {
      header: true,
      complete: function(results) {     
        const items = results.data;
        console.log(items)

      }
    })
  }
  class ProductFeed extends Component {

    render() {
      return (
        <div>
          <InputGroup>
            <Input type="file" name="inputCSV" onChange={UploadHandler}/>
          </InputGroup>
        </div>
      )
    }
  


}

export default ProductFeed;
