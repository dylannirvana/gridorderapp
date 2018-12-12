import React from "react";

import FilterAccordion from "./FilterAccordion";

import FilterCriteria from "./FilterCriteria";
class FilterContainer extends React.Component {

    constructor(props) {
        super(props);



        this.state = { collapse: false, appliedFilters:[] };
        const component = this;
        this.appliedFilters = {
            add: function(criteria,label){
                component.state.appliedFilters.push({'label':label,'criteria': criteria});
                return component.state.appliedFilters;
            },
            remove: function(filterLabel){
                return component.state.appliedFilters.filter(function(filter){
                    return filter.label != filterLabel;
                })
            },
            get:function(){
                return component.state.appliedFilters;
            }
        }
    }





    render() {


        return (


            //Display filters in an accordion form
            Object.values(FilterCriteria).map(filterCriteria =>


                    <FilterAccordion
                        key={filterCriteria}
                        isOpen={this.state.collapse}
                        filterCriteria={filterCriteria}
                        container={this.props.container}
                        appliedFilters = {this.appliedFilters}
                    />


            )
        )


    }
}

export default FilterContainer;