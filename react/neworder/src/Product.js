import React, { Component } from 'react'
import Papa from 'papaparse'

// const Grid = (props) => (
//     <div>
//         {props.someValue}
//     </div>
// )

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [] };
    
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this)
      }
    
    handleChange(event) {
        event.preventDefault()
        const inventory = event.target.files[0]
        // console.log(inventory)

        Papa.parse(inventory, {
            header: true,
            complete: this.updateData
            // complete: function(results) {
            //     const items = results.data
            //     console.log(items)
            // }
        })
    } // END

    updateData(results) {
        const data = results.data
        console.log(data)
        this.setState({data})
    }

    // productList(props) {
    //     this.props.state.map((sku) => 
    //         <ListItem key={sku} />
    //     )
    // }
   
      render() {
        return (
            <div>
                <form >
                    <label>
                    Name:
                    <input type="file" onChange={this.handleChange} />
                    </label>
                </form>

                {/* <Grid {this.state.data.map()} /> */}

                {/* <ListItem /> */}

            </div>          
        );
      }

} // END

export default Product