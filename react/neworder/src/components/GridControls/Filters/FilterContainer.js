import React from "react";
import Filter from "./Filter";
import {ButtonGroup,Container} from 'reactstrap';

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
        console.log(FILTER_FACTORY.getVisibleFilters())

        return (
            <Container className={"text-center"}>
                {
                    Object.values(FILTER_FACTORY.getVisibleFilters()).map(filter =>
                        <div className={filter.filterName + '-filter'}>
                            <h3 className="ui-group__title">{filter.filterName}</h3>
                            <ButtonGroup className={"filter d-block js-radio-button-group text-center"}>

                                {
                                    <Filter
                                        key={"accordion-" + filter.filterName}
                                        isOpen={this.state.collapse}
                                        filter={filter}
                                        filterName={filter.filterName}
                                        filterOptions={filter.filterOptions}
                                        selectedOption={filter.selectedOption}
                                        container={this.props.container}

                                    />
                                }

                            </ButtonGroup>
                        </div>
                    )
                }
            </Container>
        );


    }
}

