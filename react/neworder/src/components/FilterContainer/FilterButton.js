import React from "react";

import {ButtonGroup, Button, DropdownMenu, DropdownItem, Collapse} from 'reactstrap';
import FilterCriteria from "./FilterCriteria";
export default class FilterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            selected: false
        }
        this.onFilterClick = this.onFilterClick.bind(this);

    }
    onFilterClick = (event) => {

        const component = this;
        if(!component.state.selected){
            console.log('================IF===================')
            var filteredGrid = this.props.container.getState('grid');
var removed = [];

            for (let index in filteredGrid) {
                var product = filteredGrid[index];

                if (product[component.props.filterCriteria].indexOf(event.target.textContent)) {
                    filteredGrid.splice(index, 1);
                    removed.push(product)
                }

            }
console.log(removed)
            this.props.container.setState({'grid': filteredGrid})
        }else{
            console.log('================ELSE===================')
            const feed = this.props.container.getState('feed');
            var productList = [];

            var grid = this.props.container.getState('grid')
           feed.forEach(function(product){
               if (product[component.props.filterCriteria].indexOf(event.target.textContent)) {
                   productList.push(product);
               }
           });

           grid.splice(0,0,...productList);
            component.props.container.setState({'grid': grid});
            console.log(productList)
        }


        this.setState({selected: !this.state.selected});

    }

    render() {

        return (
            <button  className={"filter-option " + (this.state.selected ? 'active' : '')} onClick={this.onFilterClick} >
                {this.props.filterLabel}
            </button>
        );
    }
}

