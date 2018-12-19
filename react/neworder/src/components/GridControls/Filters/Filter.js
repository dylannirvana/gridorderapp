import React from "react";

import {Button, Collapse} from 'reactstrap';

import FilterOption from "./FilterOption";

export default class Filter extends React.Component {

    constructor(props, label = "", feed = [], shouldRender = false) {

        super(props);

        const component = this;

        this.state = {
            collapse: false,
            label: label,
            shouldRender: shouldRender,
            options: [],
            selectedOption: ""
        };

        this.toggle = this.toggle.bind(this);

        component.getLabel = function () {
            return component.state.label;
        };
        component.shouldRender = function () {
            return component.state.shouldRender;
        };
        component.getSelectedOption = function () {
            return component.state.selectedOption;
        };

        component.getOptions = function () {

            return component.state.options;
        };

        component.setSelectedOption = function (label) {
            component.state.selectedOption = label;
        }

        component.isOptionSelected = function (label) {
            return component.state.selectedOption.indexOf(label) == -1 ? false : true;
        }


        component.filterClickHandler = function (event) {
            const filterFactory =  component.props.container.getFilterFactory();
            let gridProducts = component.props.container.getGridProducts();

            component.props.filter.setSelectedOption(event.target.textContent);
gridProducts = component.props.container.getFilterFactory().filterProducts(gridProducts)
            filterFactory.renderNextFilter(gridProducts);
//console.log(component.props.container.getFilterFactory().filterProducts(gridProducts))
            component.props.container.setState({
                grid: component.props.container.getFilterFactory().filterProducts(gridProducts)
            });
        }


        feed.forEach(function (product) {
            const filterLabel = product[component.state.label] === undefined ? null : product[component.state.label].split(" ")[0];

            if (filterLabel && component.state.options.indexOf(filterLabel) == -1) {


                component.state.options.push(filterLabel)


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
                        onClick={this.toggle}>{this.props.filter.getLabel()}</Button>
                <Collapse isOpen={this.state.collapse}>

                    {
                        Object.values(this.props.filter.getOptions()).map(filterOption =>

                            <Button
                                key={this.props.filter.getLabel() + '-' + filterOption}
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

