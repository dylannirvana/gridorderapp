import React from "react";
import {
    Button,
    Collapse

} from 'reactstrap';


import FilterContainer from "../FilterContainer";
import Papa from "papaparse";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.togglePushMenu = this.togglePushMenu.bind(this);
        this.startNewSession = this.startNewSession.bind(this);

        this.state = {
            isOpen: false,

        };
    }

    togglePushMenu() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    //Generates a new CSV file, based on new order of the grid tiles
    saveNewGrid(){
        const newGridHTML = window.pckry.getItemElements();
        var newGridJSON = [];

        newGridHTML.forEach(function(product,index){
            newGridJSON.push({basecode: product.getAttribute('data-sku'), neworder: (index + 1) })

        })

        var csv = Papa.unparse(newGridJSON);
        var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        var csvURL =  null;
        if (navigator.msSaveBlob)
        {
            csvURL = navigator.msSaveBlob(csvData, 'download.csv');
        }
        else
        {
            csvURL = window.URL.createObjectURL(csvData);
        }

        var downloadLink = document.createElement('a');
        downloadLink.href = csvURL;
        downloadLink.setAttribute('download', 'download.csv');
        downloadLink.click();


    }

    //Destroy the current session and start a new one
    startNewSession(){


        this.props.container.setState({
            'feed': [],
            'grid': [],
            packeryRefresh: false
        })
    }


    render() {
        return (

            <ul className={"ml-auto navbar-nav"}>
                <li style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>
                    <Button className={"white-button nav-btn"} onClick={this.startNewSession}>
                        New Session
                    </Button>
                </li>
                <li style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>
                    <Button className={"white-button nav-btn"} onClick={this.saveNewGrid}>
                        Save
                    </Button>
                </li>
                <li>
                    <Button onClick={this.togglePushMenu} className={"white-button btn nav-btn"} style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>
                        Filters
                    </Button>

                    <Collapse id={"offcanvas-menu"} isOpen={this.state.isOpen} navbar>
                        {
                            <div className={"wrapper"}>
                                <div className={"close"} onClick={this.togglePushMenu}>Close</div>
                                <FilterContainer container={this.props.container}/>
                            </div>
                        }
                    </Collapse>
                </li>

            </ul>
        )
    }
}

export default Menu;