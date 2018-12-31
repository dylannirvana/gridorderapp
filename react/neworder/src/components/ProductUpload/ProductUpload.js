import React from 'react'
import { Input, InputGroup } from 'reactstrap'
import Papa from 'papaparse'
// import Parser from '../Parser'

class ProductUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = { itemList: [] }
    this.uploadHandler = this.uploadHandler.bind(this)
  }

  uploadHandler = (e) => {
    e.preventDefault();
    const inventory = e.target.files[0]

    Papa.parse(inventory, {
      header: true,
      complete: function(results) {
        const items = results.data;
        this.setState({
          itemList: items
        }) 
      } 
    })
  }

  render() {
    console.log(this.state.itemList) // why cant i render the updated state?

    return (
      <div>
        <InputGroup>
          <Input 
          type="file" 
          name="inputCSV" 
          onChange={this.uploadHandler}
          />
        </InputGroup>
      </div>
    )
  }

} // END

export default ProductUpload

