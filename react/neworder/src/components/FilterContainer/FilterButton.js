import React from "react";


export default class FilterButton extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            selected: false
        }
        this.filterGrid = this.filterGrid.bind(this);

    }

    //Filters the grid, based on the filters selected by the user
    filterGrid = (event) => {

        const component = this;
        const feed = Array.from(this.props.container.getState('feed'));
        const filterLabel = event.target.textContent;
        var activeFilters;
        var filteredGrid = feed;
        this.state.selected = !component.state.selected;
        console.log(this.state.selected)
        if (this.state.selected) {
            activeFilters = component.props.appliedFilters.add(component.props.filterCriteria, filterLabel);
        } else {
            activeFilters = component.props.appliedFilters.remove(filterLabel);
        }

        if (activeFilters.length) {
            filteredGrid = feed.filter(function (product, index) {
                // var result = false;
                return activeFilters.some(function (filter) {

                    if (product[filter.criteria] != undefined && !product[filter.criteria].indexOf(filter.label)) {
                        return true;
                    }
                })
            })
        }

        this.props.container.setState({'grid': filteredGrid,'packeryRefresh': true})


    }

    render() {

        return (
            <button className={"btn white-button filter-option " + (this.state.selected ? 'active' : '')} onClick={this.filterGrid}>
                {this.props.filterLabel}
            </button>
        );
    }
}

