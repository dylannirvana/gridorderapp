import React from "react";

import Filter from "./Filter/Filter";

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
            Object.values(FilterCriteria).map(filterName =>




                    <Filter
                        key={filterName}
                        isOpen={this.state.collapse}
                        filterName={filterName}
                        container={this.props.container}
                    />


            )
        )


    }
}

export default FilterContainer;