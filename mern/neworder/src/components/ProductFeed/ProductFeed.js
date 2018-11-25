import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import Papa from 'papaparse';

const ProductFeed = () => {
  return (
    <div>
    <InputGroup>
    <Input type="file" name="inputCSV" onChange={uploadHandler}/>
    </InputGroup>
    </div>
  )
}

function uploadHandler(event) {
  console.log('The event is registering ' + event.target)

  const inventory = event.target.files[0];
  console.log(inventory)

  Papa.parse(inventory, {
    header: true,
    complete: function(results) {
      console.log(results)

      let items = results.data;
      console.log(items)
      
      // return (
      //   <div>
      //     {items.map(function(item, index){
      //       return <li key={index}>{item}</li>
      //     })}
      //   </div>
      // )
      
    }
  })
}

export default ProductFeed;
