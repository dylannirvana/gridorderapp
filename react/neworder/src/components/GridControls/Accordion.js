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
            <div key={this.props.filterCategory + '-accordion'} className={"filter-accordion"}>
                <Button key={this.props.filterCategory + '-toggle'} className={"filter-accordion-head"} onClick={this.toggle}>{this.props.filterCategory}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(this.props.filters).map(filter =>
                                <Filter
                                    filterContainer = {this.props.filterContainer}
                                    container={this.props.container}
                                    filterCategory={this.props.filterCategory}
                                    filterLabel={filter.label}
                                    key={filter.label}
                                />
                        )
                    }


                </Collapse>
            </div>
        );
    }
}

