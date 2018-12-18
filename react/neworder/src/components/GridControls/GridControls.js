/*
* This component and its children, represent a collection of controls for working with the grid
 */

import React from "react";
import {
    Button,
    Collapse

} from 'reactstrap';

import NewSession from "./NewSession";

import SaveGrid from "./SaveGrid";
import FilterCriteria from "./Filters/FilterCriteria";
import AccordionContainer from "./AccordionContainer";


class GridControls extends React.Component {
    constructor(props) {
        super(props);

        this.togglePushMenu = this.togglePushMenu.bind(this);


        this.state = {
            isOpen: false,

        };
    }

    togglePushMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }




    render() {
        return (

            <ul className={"ml-auto navbar-nav"}>
                <li style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>

                    {/* NewSession is a component for destryoing the current session and starting a new one*/}
                    <NewSession container={this.props.container}/>

                </li>
                <li style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>

                    {/*SaveGrid is a component for generating a CSV file from the grid tiles */}
                    <SaveGrid container={this.props.container}/>

                </li>
                <li>
                    <Button
                        onClick={this.togglePushMenu} className={"white-button btn nav-btn"}
                        style={{display: this.props.container.gridPopulated() ? '' : 'none'}}>
                        Filters
                    </Button>

                    <Collapse id={"offcanvas-menu"} isOpen={this.state.isOpen} navbar>
                        {
                            <div className={"wrapper"}>
                                <div className={"close"} onClick={this.togglePushMenu}>Close</div>
                                {
                                    <AccordionContainer
                                        container={this.props.container}
                                    />
                                }
                            </div>
                        }
                    </Collapse>
                </li>

            </ul>
        )
    }
}

export default GridControls;