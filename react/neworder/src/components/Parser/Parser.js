import React, { Component } from 'react'
import Papa from 'papaparse'

// here I cannot seem to get Parser.uploadHandler to register in ProductUpload
class Parser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: []
    }
  }

  uploadHandler = (e) => {
    e.preventDefault();
    const inventory = e.target.files[0]
  
    Papa.parse(inventory, {
      header: true,
      complete: function(results) {
        const items = results.data;   
        this.setState({itemList:items})
      } 
    })
    console.log(this.itemList)
  }

  render() {
    return (
      console.log(this.itemList)
    )
  }
}


export default Parser

