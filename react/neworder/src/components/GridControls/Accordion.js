import React from "react";

import {Button,  Collapse} from 'reactstrap';

import Filter from "./Filters/Filter";
export default class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }





    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {



        return (
            <div key={this.props.filterCriteria + '-accordion'} className={"filter-accordion"}>
                <Button key={this.props.filterCriteria + '-toggle'} className={"filter-accordion-head"} onClick={this.toggle}>{this.props.filterCriteria}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(this.props.filters).map(filterLabel =>
                                <Filter  container={this.props.container} filterCriteria={this.props.filterCriteria} filterLabel={filterLabel} key={filterLabel}/>
                        )
                    }


                </Collapse>
            </div>
        );
    }
}

