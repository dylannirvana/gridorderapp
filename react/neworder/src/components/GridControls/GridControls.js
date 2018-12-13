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
import Accordion from "./Accordion";


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

    //Get the filters associated with a filter criteria
    //Example, This function returns all filters associated with the filter criteria CATEGORY
    getFilters(filterCriteria) {
        const feed = this.props.container.getState('feed');
        let filterValueList = [];

        //Iterate over the filter critera (Example: CATEGORY, FUNCTION etc) and fetch the applicable filters for each criteria
        feed.forEach(function (product) {
            const filterValue = product[filterCriteria] === undefined ? null : product[filterCriteria].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue.toLowerCase())) {
                filterValueList.push(filterValue.toLowerCase())
            }
        });

        return filterValueList;
    };


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
                                    //Display filters in an accordion form
                                    Object.values(FilterCriteria).map(filterCriteria =>
                                        <Accordion
                                            key={filterCriteria}
                                            isOpen={this.state.collapse}
                                            filterCriteria={filterCriteria}
                                            filters={this.getFilters(filterCriteria)}
                                            container={this.props.container}
                                        />
                                    )
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