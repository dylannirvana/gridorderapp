import React from 'react'
import { Input, InputGroup } from 'reactstrap'
import ProductFeed from '../ProductFeed'

const ProductImport = () => {
    return (
      <div>
        <InputGroup>
          <Input 
          type="file" 
          name="inputCSV" 
          onChange={ProductFeed.uploadHandler}
          />
        </InputGroup>
      </div>
    )
  }
  
  export default ProductImport