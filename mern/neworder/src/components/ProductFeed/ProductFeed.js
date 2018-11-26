import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';

// Input for product feed sends event.target to uploadHandler to parse to JSON 
const ProductFeed = () => { 
  return (
    <div>
      <InputGroup>
        <Input type="file" name="inputCSV" onChange={uploadHandler}/> 
      </InputGroup>
    </div>
  )
}

// TODO: Needs to pass items object to Grid via props
function uploadHandler(event) {
  const inventory = event.target.files[0];

  Papa.parse(inventory, {
    header: true,
    complete: function(results) {     
      const items = results.data;
      console.log(items)
    }
  })
}

export default ProductFeed;
