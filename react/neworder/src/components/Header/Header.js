import React from "react";
import {
    Collapse,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Input
} from 'reactstrap';
import "./Header.scss";

import FilterContainer from "./FilterContainer";
import Papa from "papaparse";



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.togglePushMenu = this.togglePushMenu.bind(this);
        this.state = {
            isOpen: false,

        };
    }

    togglePushMenu() {
        console.log('HERE')
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    getFilterValues(filterName){
        const feed = this.props.feed;
        let filterValueList = [];

        for (let index in this.props.feed) {
            const product = feed[index];


            let filterValue = product[filterName] == undefined ? null : product[filterName].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue)) {
                filterValueList.push(filterValue)
            }
        }

        return filterValueList;
    };


    render() {
        var productFilters = {category: [], function: [], family: []};
        return (
            <Container fluid={true} id={"page-header"}>
                <Navbar>
                    <NavbarBrand id={"logo"} href="/">Grid Order Tool</NavbarBrand>

                    <ul className={"ml-auto navbar-nav"}>
                        <NavbarToggler onClick={this.togglePushMenu} className="mr-2"><span
                            className="navbar-text">Filters</span>
                        </NavbarToggler>

                        <Input
                            type="file"
                            name="inputCSV"
                            id={"csv-upload-button"}
                            onChange={this.props.onFileUpload} //onFileUpload is defined in App.js .. This handler updates the state of App component and re-renders the product grid

                        />
                    </ul>

                    <Collapse id={"offcanvas-menu"} isOpen={this.state.isOpen} navbar>
                        {

                            <FilterContainer feed={this.props.feed} filtersReady={this.props.filtersReady} onFilterChange={this.props.onFilterChange} />


                        }
                    </Collapse>
                </Navbar>
            </Container>
        )

    }
}

export default Header;