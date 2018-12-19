/*
* This component displays the filter button
* And also implements the logic to filter the grid, when the filter button is clicked
 */

import React from "react";
import FilterCategory from "./FilterCategoryList";

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

        let filterCategories = this.props.container.getState('filterCategories');

        //Update the selected state of the component
        component.state.selected = !component.state.selected

        if (this.state.selected) { //If filter button is selected, add it to the list of appliedFilters
            activeFilters = component.props.filterContainer.addFilter(component.props.filterCategory, filterLabel);
        } else { //Else, remove the filter from the list of applied filters
            activeFilters = component.props.filterContainer.removeFilter(filterLabel);
        }
      //  component.props.container.addCategory('function')

        if (activeFilters.length) { //If any filters have been applied

            filteredGrid = feed.filter(function (product, index) { //Loop through each product in the product feed

                return activeFilters.some(function (filter) { //Loop through the applied filters

                    //Check if the product matches atleast one of the the selected filters
                    if (product[filter.category] !== undefined && !product[filter.category].toLowerCase().indexOf(filter.label)) {

                        //If there is a match, return true and exit the loop
                        return true;
                    }

                    //If there is no match, return false and continue with the loop
                    return false;
                })
            })
        }

        filterCategories.filter(function(filterCategory,index){
            if(filterCategory.label == component.props.filterCategory){
                filterCategory.setActiveFilter(component.props.filterLabel);

                if(filterCategories.indexOf(filterCategory.label)+1 < filterCategories.length){
                    filterCategories[filterCategories.indexOf(filterCategory.label)+1].rendered = true;
                }
            }

        })

        //Update thr product grid
        this.props.container.setState({'grid': filteredGrid, 'packeryRefresh': true, reloadFilters: true, filterCategories: filterCategories})
        this.props.filterContainer.reload();

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

