import React from "react";

import FilterAccordion from "./FilterAccordion";

import FilterCriteria from "./FilterCriteria";
class FilterContainer extends React.Component {

    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {




        return (
            //Loop through the products
            Object.values(FilterCriteria).map(filterCriteria =>




                    <FilterAccordion
                        key={filterCriteria}
                        isOpen={this.state.collapse}
                        filterCriteria={filterCriteria}
                        container={this.props.container}
                    />


            )
        )


    }
}

export default FilterContainer;