import React from "react";
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

import FileUploader from './FileUploader';
import ProductGrid from './ProductGrid';
import FilterContainer from './FilterContainer';
import Papa from "papaparse";


class Content extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            feed: {},//The  parsed JSON obtained from PapaParse
            grid: {},
            selectedFilters: []
        };
    }

    //Takes the parsed JSON from PapaParse and updates the product grid
    uploadFile = (event) => {
        const inventory = event.target.files[0];

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

        return (
            <Container>

                <Row>
                    <Col>
                        <h1>Import</h1>
                        <FileUploader onFileUpload={this.uploadFile}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>The Grid</h1>
                        <FilterContainer onFilterChange={this.sortGrid} feed={this.state.feed}/>
                        <ProductGrid grid={this.state.grid}/>
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default Content;