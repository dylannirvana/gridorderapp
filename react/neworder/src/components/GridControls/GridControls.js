/*
* This component and its children, represent a collection of controls for working with the filteredProducts
 */

import React from "react";
import SaveGrid from "./SaveGrid";
import FilterContainer from "./Filters/FilterContainer";


const GridControls = (props) => {

        const FILTER_FACTORY = props.container.getFilterFactory();

        return (

            <ul id="product-grid-controls" className={" navbar-nav"}>

                <li className={"grid-control"}>
                    {
                        <FilterContainer
                            container={props.container}
                        />
                    }
                </li>


                <li className={"text-center grid-control"} style={{display: FILTER_FACTORY.productsAvailable() ? '' : 'none'}}>
                    {/*SaveGrid is a component for generating a CSV file from the filteredProducts tiles */}
                    <SaveGrid container={props.container}/>

                </li>


            </ul>
        )

}

export default GridControls;