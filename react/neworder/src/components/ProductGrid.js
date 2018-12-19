import React, { Component } from 'react'
import Papa from 'papaparse'

class ProductGrid extends Component {

    uploadHandler = (event) => {
        const inventory = event.target.files[0]
    
        Papa.parse(inventory, {
            header: true,
            complete: function(results) {
                const items = results.data;   
                console.log(items)
            }
        })
    } // END UploadHandler

    render() {
        
        return (
        <div>
            Go crazy
        </div>
        )
    }
}

export default ProductGrid