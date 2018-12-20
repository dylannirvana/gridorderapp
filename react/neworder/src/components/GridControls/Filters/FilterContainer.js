import React from "react";
import Filter from "./Filter";

export default class FilterContainer extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            collapse: false
        };



        this.toggle = this.toggle.bind(this);
    }

   /* shouldComponentUpdate() {


        if (!this.props.container.gridPopulated()) {
            return false;
        }
        return (!this.state.reload && !this.container.getAppliedFiltersCount()) ? true : this.state.reload;
    }*/






    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        //  if(this.props.container.gridPopulated() && this.props.container.getState().reloadFilters){


            const FILTER_FACTORY = this.props.container.getFilterFactory();


            return (

                //Display filters in an accordion form
                Object.values(FILTER_FACTORY.getVisibleFilters()).map(filter =>

                    <Filter
                        key={"accordion-" + filter.filterName}
                        isOpen={this.state.collapse}
                        filter={filter}
                        filterName = {filter.filterName}
                        filterOptions = {filter.filterOptions}
                        selectedOption = {filter.selectedOption}
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

