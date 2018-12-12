import React from "react";


export default class FilterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
        this.onFilterClick = this.onFilterClick.bind(this);

    }

    onFilterClick = (event) => {

        const component = this;
        const feed = Array.from(this.props.container.getState('feed'));
        const filterLabel = event.target.textContent;
        var activeFilters;
        var filteredGrid = feed;
        this.state.selected = !component.state.selected;
        console.log(this.state.selected)
        if (this.state.selected) {
            activeFilters = component.props.appliedFilters.add(component.props.filterCriteria, filterLabel);
        } else {
            activeFilters = component.props.appliedFilters.remove(filterLabel);
        }

        //    if (!component.state.selected) {

       
        if (activeFilters.length) {
            filteredGrid = feed.filter(function (product, index) {
                // var result = false;
                return activeFilters.some(function (filter) {

                    if (product[filter.criteria] != undefined && !product[filter.criteria].indexOf(filter.label)) {
                        return true;
                    }
                })
            })
        }

        this.props.container.setState({'grid': filteredGrid,'packeryRefresh': true})
        console.log('======= FILTERED GRID =====================', filteredGrid);
        //component.container.setState()
        /*
          //If filter is not selected, execute the logic and select teh filter
          console.log('================IF=================== ' + component.props.filterCriteria + ' ' + event.target.textContent)
          var filteredGrid = Array.from(this.props.container.getState('feed'));
          var removed = [];

          for (var index = 0; index < feed.length;) {
              var product = filteredGrid[index]
              console.log('INDEX ' + index)
              console.log('STATUS ' + product[component.props.filterCriteria].indexOf(event.target.textContent) + ' criteria ' + product[component.props.filterCriteria] + ' TEXT ' + event.target.textContent + ' sku ' + product.sku)
              if (!product[component.props.filterCriteria].indexOf(event.target.textContent)) {

                  filteredGrid.splice(index, 1);
                  removed.push(product)

                  console.log('***** REMOVING index **********' + index)
              } else {
                  index++;
              }

          }
          console.log(removed)
          this.props.container.setState({'grid': filteredGrid})*/
        //  }
        /*else{
                    console.log('================ELSE===================')

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
                }*/


    }

    render() {

        return (
            <button className={"btn white-button filter-option " + (this.state.selected ? 'active' : '')} onClick={this.onFilterClick}>
                {this.props.filterLabel}
            </button>
        );
    }
}

