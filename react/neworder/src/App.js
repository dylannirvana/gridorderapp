import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

import Header from './components/Header';
import ProductGrid from './components/Content/ProductGrid';


import Papa from 'papaparse';




class App extends Component {

    constructor(props) {
        super(props);


        this.state = {
            feed: false, //The  parsed JSON obtained from PapaParse
            grid: {},
            filtersReady: false,
            selectedFilters: [],

        };
    }

    //Takes the parsed JSON from PapaParse and updates the product grid
    uploadFile = (event) => {
        const inventory = event.target.files[0];
        console.log('UPLAOD FILE')
        const component = this;
        Papa.parse(inventory, {
            header: true,
            complete: function (results) {
                console.log(Array.isArray(results.data))
                component.setState({
                    feed: results.data,
                    grid: results.data
                });

            }
        });


    }

    sortGrid = (event) => {
        this.state.filtersReady = true;
        this.state.selectedFilters.push(event.target.textContent);
        console.log(this.state.selectedFilters)
        var sortedGrid = this.state.grid;


        console.log(sortedGrid)

        for(let index in sortedGrid){
            var product = sortedGrid[index];
            if(!this.state.selectedFilters.includes(product.function)){
                sortedGrid.splice(index,1);
            }
        }

        this.setState({

            grid: sortedGrid
        });
    }

    render() {
        var productFilters = {category: [], function: [], family: []};
        return (
            <div id={"page"}>

                <Header onFileUpload={this.uploadFile} feed={this.state.feed} onFilterChange={this.sortGrid}/>
                <ProductGrid grid={this.state.grid}/>
            </div>
        );
    }
}

export default App;