import React from "react";

import {Button, Collapse} from 'reactstrap';

import Filter from "./Filters/Filter";
import FilterCriteria from "./Filters/FilterCriteria";
import Accordion from "./Accordion";

export default class AccordionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }


    //Get the filters associated with a filter criteria
    //Example, This function returns all filters associated with the filter criteria CATEGORY
    getFilters(filterCriteria) {
        const feed = this.props.container.getState('feed');
        const appliedFilters = this.props.container.getState('appliedFilters');
        let filterValueList = [];

        //Iterate over the filter critera (Example: CATEGORY, FUNCTION etc) and fetch the applicable filters for each criteria
        feed.forEach(function (product) {
            const filterValue = product[filterCriteria] === undefined ? null : product[filterCriteria].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue.toLowerCase())) {
               if(appliedFilters.length){
                   let result = appliedFilters.some(function(filter){
                       console.log( product.category)
                       return product.category.indexOf(filter.label) != -1;
                   })
                   result && filterValueList.push(filterValue.toLowerCase())
               }else{
                   filterValueList.push(filterValue.toLowerCase())
               }


            }

        });

     //   appliedFilters.each()

        return filterValueList;
    };

    updateCriteria() {
        if( this.props.container.gridPopulated()){
            let appliedCriteria = this.props.container.getAppliedCategories();
            // const index = FilterCriteria[appliedCriteria.length];
            const nextCriteria = FilterCriteria[appliedCriteria.length];
            const appliedFilters = this.props.container.getAppliedFilters();


            if (!appliedCriteria.length && nextCriteria !== undefined) {
                appliedCriteria.push(nextCriteria)
                console.log('==== IF ============')
                console.log(appliedCriteria)
            }else{
                console.log('==== ELSE ============')
                let result = appliedFilters.some(function(filter){
                    return filter.label == nextCriteria;
                });
                if(this.props.container.getState().reloadFilters && !result.length && nextCriteria !== undefined){
                    console.log('==== ELSE IF ============')
                    appliedCriteria.push(nextCriteria)
                }
                console.log(appliedCriteria)
            }




            return appliedCriteria;
        }else{
            return [];
        }

    }


    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        //  if(this.props.container.gridPopulated() && this.props.container.getState().reloadFilters){
              return (


                  //Display filters in an accordion form
                  Object.values(this.updateCriteria()).map(filterCriteria =>
                      <Accordion
                          key={"accordion-" + filterCriteria}
                          isOpen={this.state.collapse}
                          filterCriteria={filterCriteria}
                          filters={this.getFilters(filterCriteria)}
                          container={this.props.container}
                      />
                  )


              );
          /* }else{
              return null;
          }*/
        console.log('**************************** RENDER ***************************************')
        const criteria = this.updateCriteria();
       // console.log(criteria)

    }
}

