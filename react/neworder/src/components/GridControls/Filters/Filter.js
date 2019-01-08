import React from "react";

import {Button} from 'reactstrap';


const Filter = (props) => {

    /*
     *  Click event handler, triggered when filter button is clicked
     */
    function filterClickHandler(event) {

        const FILTER_FACTORY = props.container.getFilterFactory();
        const FILTERED_PRODUCTS = FILTER_FACTORY.toggleFilterOption(props.filterName, event.target.textContent);

        props.container.setState({
            packeryRefresh: true,
            filteredProducts: FILTERED_PRODUCTS
        });
    }

    return (


        Object.values(props.filterOptions).map(filterOption =>

            <Button
                color={"warning"}
                key={props.filterName + '-' + filterOption}
                className={"btn filter-option " + (props.selectedOption === filterOption ? 'active' : '')}
                onClick={filterClickHandler}>
                {filterOption}
            </Button>
        )


    );

}

export default Filter;