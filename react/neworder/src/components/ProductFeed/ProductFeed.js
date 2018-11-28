import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';

const ProductFeed = () => {
  const inventory = event.target.files[0];

  const uploadHandler = (event) => {
    Papa.parse(inventory, {
      header: true,
      complete: function(results) {     
        const items = results.data;
        console.log(items)
        
      }
    })
  }

  return (
    <div>
      <InputGroup>
        <Input type="file" name="inputCSV" onChange={uploadHandler}/>
      </InputGroup>
    </div>
  )

}


export default ProductFeed;

