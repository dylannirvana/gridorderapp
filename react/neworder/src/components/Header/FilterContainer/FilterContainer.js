import React from "react";

import Filter from "./Filter";


class FilterContainer extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            ready: false, //The  parsed JSON obtained from PapaParse


        };
    }
    getFilterValues(filterName){
        const feed = this.props.feed;
        let filterValueList = [];

        for (let index in this.props.feed) {
            const product = feed[index];


            let filterValue = product[filterName] == undefined ? null : product[filterName].split(" ")[0];
            if (filterValue && !filterValueList.includes(filterValue)) {
                filterValueList.push(filterValue)
            }
        }

        return filterValueList;
    };

    render() {

        console.log('RENDER FILETER CONTAINER')
        var productFilters = {category: [], function: [], family: []};

        if(this.props.feed && !this.state.ready){

            this.state.ready = true;
            return (
                //Loop through the products
                Object.keys(productFilters).map(filterName =>

                    //Invokes and renders the Product Component

                    <div>TEST</div>
                )
            )
        }else{
            alert('NULL')
            return null;
        }


    }
}

export default FilterContainer;