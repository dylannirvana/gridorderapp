import React from "react";

import {Button,  Collapse} from 'reactstrap';

import FilterButton from "./FilterButton";
export default class FilterAccordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selected: false
        };

        this.toggle = this.toggle.bind(this);
    }



    getFilterOptions(filterCriteria) {
        const feed = this.props.container.getState('feed');
        let filterValueList = [];

        for (let index in feed) {
            const product = feed[index];


            let filterValue = product[filterCriteria] === undefined ? null : product[filterCriteria].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue)) {
                filterValueList.push(filterValue)
            }
        }

        return filterValueList;
    };



    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        const filterOptions = this.getFilterOptions(this.props.filterCriteria);

      //  if (!filterOptions.length || this.props.container.getState('grid').length) return null;

        return (
            <div key={this.props.filterCriteria + '-accordion'} className={"filter-accordion"}>
                <Button key={this.props.filterCriteria + '-toggle'} className={"filter-accordion-head"} onClick={this.toggle}>{this.props.filterCriteria}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(filterOptions).map(filterLabel =>
                                <FilterButton  appliedFilters = {this.props.appliedFilters} container={this.props.container} filterCriteria={this.props.filterCriteria} filterLabel={filterLabel} key={filterLabel}/>
                        )
                    }


                </Collapse>
            </div>
        );
    }
}

