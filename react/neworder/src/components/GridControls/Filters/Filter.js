import React from "react";

import {Button, Collapse} from 'reactstrap';


export default class Filter extends React.Component {

    constructor(props, name = "", feed = [], shouldRender = false) {

        super(props);

        const COMPONENT = this;

        this.state = {
            collapse: false,
            name: name,
            shouldRender: shouldRender,
            options: [],
            selectedOption: ""
        };

        this.toggle = this.toggle.bind(this);

        COMPONENT.getName = function () {
            return COMPONENT.state.name;
        };
        COMPONENT.shouldRender = function () {
            return COMPONENT.state.shouldRender;
        };
        COMPONENT.getSelectedOption = function () {
            return COMPONENT.state.selectedOption;
        };

        COMPONENT.getOptions = function () {

            return COMPONENT.state.options;
        };

        COMPONENT.setSelectedOption = function (option) {
            console.log(option)
            COMPONENT.state.selectedOption = option;
        }

        COMPONENT.isOptionSelected = function (label) {
            return COMPONENT.state.selectedOption.indexOf(label) == -1 ? false : true;
        }


        COMPONENT.filterClickHandler = function (event) {
            const FILTER_FACTORY = COMPONENT.props.container.getFilterFactory();
            let gridProducts = COMPONENT.props.container.getGridProducts();

            COMPONENT.props.filter.setSelectedOption(event.target.textContent);
            gridProducts = COMPONENT.props.container.getFilterFactory().filterProducts(gridProducts)
            FILTER_FACTORY.updateContext(gridProducts);

            COMPONENT.props.container.setState({
                grid: COMPONENT.props.container.getFilterFactory().filterProducts(gridProducts)
            });
        }


        feed.forEach(function (product) {
            const filterLabel = product[COMPONENT.state.name] === undefined ? null : product[COMPONENT.state.name].split(" ")[0];

            if (filterLabel && COMPONENT.state.options.indexOf(filterLabel) == -1) {


                COMPONENT.state.options.push(filterLabel)


            }

        });

    }


    //Toggle the accordion
    toggle(event) {

        this.setState({
            collapse: !this.state.collapse
        });
    }


    render() {


        return (
            <div key={this.props.filterCategory + '-accordion'} className={"filter-accordion"}>
                <Button key={this.props.filterCategory + '-toggle'} className={"filter-accordion-head"}
                        onClick={this.toggle}>{this.props.filter.getName()}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(this.props.filter.getOptions()).map(filterOption =>

                            <Button
                                key={this.props.filter.getName() + '-' + filterOption}
                                className={"btn white-button filter-option " + (this.props.filter.isOptionSelected(filterOption) ? 'active' : '')}
                                onClick={this.filterClickHandler}>
                                {filterOption}
                            </Button>
                        )
                    }


                </Collapse>
            </div>
        );
    }
}

