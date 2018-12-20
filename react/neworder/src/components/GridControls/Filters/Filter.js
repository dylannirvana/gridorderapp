import React from "react";

import {Button, Collapse} from 'reactstrap';


export default class Filter extends React.Component {

    constructor(props, name = "", feed = [], shouldFilterRender = false) {

        super(props);


        this.state = {
            collapse: false,
            name: name,
            shouldFilterRender: shouldFilterRender,
            filterOptions: [],
            selectedOption: ""
        };


        this.toggle = this.toggle.bind(this);


        /*
        * GET METHODS -> Methods for getting instance data
         */
        this.getFilterName = () => this.state.name;

        this.getAllOptions = () => this.state.filterOptions;

        this.getSelectedOption = () => this.state.selectedOption

        this.isOptionSelected = (filterOption) => this.getSelectedOption().indexOf(filterOption) == -1 ? false : true;

        this.shouldFilterRender = () => this.state.shouldFilterRender;


        /*
        * SET METHODS -> Methods for setting instance data
        */
        this.setSelectedOption = (filterOption) => {
            this.state.selectedOption = filterOption
        };


        /*
         *  Click event handler, triggered when filter button is clicked
         */
        this.filterOptionClick = (event) => {
            const FILTER_FACTORY = this.props.container.getFilterFactory();
            let gridProducts = this.props.container.getGridProducts();

            FILTER_FACTORY.selectOption(this.props.filterName, event.target.textContent);

            gridProducts = this.props.container.getFilterFactory().filterProducts(gridProducts)
            FILTER_FACTORY.updateVisibleFilters(gridProducts, this.props.filterName);

            this.props.container.setState({
                grid: this.props.container.getFilterFactory().filterProducts(gridProducts)
            });
        }


    }


    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {

        //this.state = this.props.filterState;

        return (


            Object.values(this.props.filterOptions).map(filterOption =>

                <Button
                    color={"warning"}
                    key={this.props.filterName + '-' + filterOption}
                    className={"btn white-button filter-option " + (this.props.selectedOption == filterOption ? 'active' : '')}
                    onClick={this.filterOptionClick}>
                    {filterOption}
                </Button>
            )


        );
    }
}

