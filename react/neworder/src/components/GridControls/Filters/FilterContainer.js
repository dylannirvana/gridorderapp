import React from "react";
import Filter from "./Filter";
import {ButtonGroup, Container} from 'reactstrap';

 const FilterContainer = (props) => {


        const FILTER_FACTORY = props.container.getFilterFactory();

        //If products are available, then extract the filters from the products and render
        if (FILTER_FACTORY.productsAvailable()) {

            return (
                <Container className={"text-center"}>
                    {
                        Object.values(FILTER_FACTORY.getVisibleFilters()).map(filter =>
                            <div className={filter.filterName + '-filter'}  key={"accordion-" + filter.filterName}>
                                <h3 className="ui-group__title">{filter.filterName}</h3>
                                <ButtonGroup className={"filter d-block js-radio-button-group text-center"}>

                                    {
                                        <Filter


                                            filter={filter}
                                            filterName={filter.filterName}
                                            filterOptions={filter.filterOptions}
                                            selectedOption={filter.selectedOption}
                                            container={props.container}

                                        />
                                    }

                                </ButtonGroup>
                            </div>
                        )
                    }
                </Container>
            );
        }

        return null;



}

export default FilterContainer;