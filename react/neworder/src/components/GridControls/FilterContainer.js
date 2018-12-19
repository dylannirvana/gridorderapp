import React from "react";


import Filter from "./Filters/Filter";

export default class FilterContainer extends React.Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            reload: false,
            collapse: false
        };

        this.container = {
            reload() {
                component.setState({reload: true})
            },

            //Functions for managing filters
            addFilter(category, label) {
                let appliedFilters = component.props.container.getState('appliedFilters');

                appliedFilters.push({'label': label, 'category': category});
                return appliedFilters;
            },
            removeFilter(filterLabel) {
                let appliedFilters = component.props.container.getState('appliedFilters');
                return appliedFilters.filter(function (filter) {
                    return filter.label !== filterLabel;
                })
            },
            getAppliedFilters() {
                return component.props.container.getState('filters');
            },

            getAppliedFiltersCount() {
                return this.getAppliedFilters().length;
            },

            getAppliedFilterCategories() {
                const appliedFilters = this.getAppliedFilters();
                let appliedCategories = [];
                appliedFilters.forEach(function (filter) {
                    appliedCategories.push(filter.category);
                })
                return appliedCategories;
            }
        };

        this.toggle = this.toggle.bind(this);
    }

   /* shouldComponentUpdate() {


        if (!this.props.container.gridPopulated()) {
            return false;
        }
        return (!this.state.reload && !this.container.getAppliedFiltersCount()) ? true : this.state.reload;
    }*/

    //Get the filters associated with a filter category
    //Example, This function returns all filters associated with the filter category CATEGORY
    getFilters(filterCategory) {
        const feed = this.props.container.getState('feed');
        const appliedFilters = this.props.container.getState('appliedFilters');
        let filterValueList = [];

        //Iterate over the filter critera (Example: CATEGORY, FUNCTION etc) and fetch the applicable filters for each category
        feed.forEach(function (product) {
            const filterValue = product[filterCategory] === undefined ? null : product[filterCategory].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue.toLowerCase())) {
                if (appliedFilters.length) {
                    let result = appliedFilters.some(function (filter) {

                        return product.category.indexOf(filter.label) != -1;
                    })
                    result && filterValueList.push(filterValue.toLowerCase())
                } else {
                    filterValueList.push(filterValue.toLowerCase())
                }


            }

        });

        //   appliedFilters.each()

        return filterValueList;
    };




    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        //  if(this.props.container.gridPopulated() && this.props.container.getState().reloadFilters){


            const filterFactory = this.props.container.getFilterFactory();


            return (

                //Display filters in an accordion form
                Object.values(filterFactory.getRenderedFilters()).map(filter =>

                    <Filter
                        key={"accordion-" + filter.getLabel()}
                        isOpen={this.state.collapse}
                        filter={filter}
                        container={this.props.container}

                    />
                )


            );


        /* }else{
            return null;
        }*/

        // console.log(category)

    }
}

