/*
* This component displays the filter button
* And also implements the logic to filter the grid, when the filter button is clicked
 */

import React from "react";


export default class Filter extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            selected: false // Indicates, if the filter has been selected
        };

        this.filterGrid = this.filterGrid.bind(this);

    }



    //Filters the grid, based on the filters selected by the user
    filterGrid = (event) => {

        const component = this,
            feed = Array.from(this.props.container.getState('feed')),
            filterLabel = event.target.textContent;

        let activeFilters,
            filteredGrid = feed;

        //Update the selected state of the component
        component.state.selected = !component.state.selected

        if (this.state.selected) { //If filter button is selected, add it to the list of appliedFilters
            activeFilters = component.props.container.addFilter(component.props.filterCriteria, filterLabel);
        } else { //Else, remove the filter from the list of applied filters
            activeFilters = component.props.container.removeFilter(filterLabel);
        }
      //  component.props.container.addCategory('function')

        if (activeFilters.length) { //If any filters have been applied

            filteredGrid = feed.filter(function (product, index) { //Loop through each product in the product feed

                return activeFilters.some(function (filter) { //Loop through the applied filters

                    //Check if the product matches atleast one of the the selected filters
                    if (product[filter.criteria] !== undefined && !product[filter.criteria].toLowerCase().indexOf(filter.label)) {

                        //If there is a match, return true and exit the loop
                        return true;
                    }

                    //If there is no match, return false and continue with the loop
                    return false;
                })
            })
        }

        //Update thr product grid
        this.props.container.setState({'grid': filteredGrid, 'packeryRefresh': true, reloadFilters: true})


    }

    render() {

        return (
            <button className={"btn white-button filter-option " + (this.state.selected ? 'active' : '')}
                    onClick={this.filterGrid}>
                {this.props.filterLabel}
            </button>
        );
    }
}

