import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';

// Input that takes in full CSV product feed 
const ProductFeed = () => {
  return (
    <div>
    <InputGroup>
    <Input type="file" name="inputCSV" onChange={uploadHandler}/>
    </InputGroup>
    </div>
  )
}

// Handler Papa.parse converts CSV to JSON
function uploadHandler(event) {
  console.log('The event is registering ' + event.target) // Easy squeezy

  const inventory = event.target.files[0];
  console.log(inventory) // The array object

  Papa.parse(inventory, {
    header: true,
    complete: function(results) { // Object with data. Err, meta to be handled later
      console.log(results)

      let items = results.data; // Data to be passed to Grid, iterated over, and used by Packery, Draggabilly, and Isotope
      console.log(items)
            
    }
  })
}

export default ProductFeed;
