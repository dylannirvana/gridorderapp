import React from "react";

import {Button, Collapse} from 'reactstrap';

import Filter from "./Filters/Filter";
import FilterCategory from "./Filters/FilterCategory";
import Accordion from "./Accordion";

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
                return component.props.container.getState('appliedFilters');
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

    shouldComponentUpdate() {
        /* if(!this.state.reload && !this.getAppliedFiltersCount()){
             return true;
         }else{

         }*/

        if (!this.props.container.gridPopulated()) {
            return false;
        }
        return (!this.state.reload && !this.container.getAppliedFiltersCount()) ? true : this.state.reload;
    }

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

    getNextFilterCategory() {

        let appliedCategory = this.container.getAppliedFilterCategories();
        // const index = FilterCategory[appliedCategory.length];
        const nextCategory = FilterCategory[appliedCategory.length].label;
        const appliedFilters = this.container.getAppliedFilters();


        if (!appliedCategory.length && nextCategory !== undefined) {
            appliedCategory.push(nextCategory)

        } else {

            let result = appliedFilters.some(function (filter) {
                return filter.label == nextCategory;
            });
            if (this.props.container.getState().reloadFilters && !result.length && nextCategory !== undefined) {

                appliedCategory.push(nextCategory)
            }

        }



        return appliedCategory;


    }


    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        //  if(this.props.container.gridPopulated() && this.props.container.getState().reloadFilters){

        if (this.shouldComponentUpdate()) {

            const children = <Accordion/>;
            const filterCategories = this.props.container.getState('filterCategories');

            const renderedCategories = filterCategories.filter(function(category){
                return category.rendered ? true: false;
            })
console.log(renderedCategories)
            return (

                //Display filters in an accordion form
                Object.values(renderedCategories).map(category =>
                    <Accordion
                        key={"accordion-" + category.label}
                        isOpen={this.state.collapse}
                        filterCategory={category.label}
                        filters={category.getFilters()}
                        container={this.props.container}
                        filterContainer={this.container}
                    />
                )


            );
        } else {
            return null;
        }

        /* }else{
            return null;
        }*/

        // console.log(category)

    }
}

