import React from "react";

import {ButtonGroup, Button, DropdownMenu, DropdownItem, Collapse} from 'reactstrap';
import FilterCriteria from "../FilterCriteria";
export default class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selected: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {

        this.setState({collapse: !this.state.collapse});
    }

    getFilterOptions(filterName) {
        const feed = this.props.container.getState('feed');
        let filterValueList = [];

        for (let index in feed) {
            const product = feed[index];


            let filterValue = product[filterName] == undefined ? null : product[filterName].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue)) {
                filterValueList.push(filterValue)
            }
        }

        return filterValueList;
    };

    filterChangeHandler = (event) => {


        console.log(this.state.selectedFilters)
        var filteredGrid = this.props.container.getState('grid');

        FilterCriteria.forEach(function(criteria){
            for (let index in filteredGrid) {
                var product = filteredGrid[index];
                console.log(product)
                if (product[criteria].indexOf(event.target.textContent)) {
                    filteredGrid.splice(index, 1);
                }
            }
        })


        this.state.selected = !this.state.selected;
        this.props.container.setState({'grid': filteredGrid})
    }

    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        const filterOptions = this.getFilterOptions(this.props.filterName);

      //  if (!filterOptions.length || this.props.container.getState('grid').length) return null;

        return (
            <div key={this.props.filterName + '-accordion'} className={"filter-accordion"}>
                <Button key={this.props.filterName + '-toggle'} className={"filter-accordion-head"} onClick={this.toggle}>{this.props.filterName}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(filterOptions).map(filterValue =>
                                <Button type="button" className={"filter-option"} onClick={this.filterChangeHandler} key={this.props.filterName + '-' + filterValue}>
                                    {filterValue}
                                </Button>
                        )
                    }


                </Collapse>
            </div>
        );
    }
}

