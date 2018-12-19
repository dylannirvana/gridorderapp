import React from 'react'
import { Input, InputGroup } from 'reactstrap'
import { uploadHandler } from './ProductGrid.js'

const ProductUpload = (props) => {

  return (
    <div>
      <InputGroup>
        <Input type="file" name="inputCSV" onChange={props.uploadHandler} />
      </InputGroup>
    </div>
  )

} // END ProductUpload

export default ProductUpload

