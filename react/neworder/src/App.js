/*
* Entry point for the App
 */

import React, {Component} from 'react';


import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.scss';
import FilterCriteria from "./components/GridControls/Filters/FilterCriteria";

class App extends Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            feed: [], //The  parsed JSON obtained from PapaParse
            grid: [], // filtered grid

            appliedCriteria: [],
            reloadFilters: false,
            appliedFilters: [], //Filters applied by the user

            packeryRefresh: false, /// whether packery should be refreshed
            packery: false, //Reference to the Packery Instance
            dragableComponents: [] //Array of dragable product components
        };

        //Container allows the child components to manage the state of the GridOrder component
        this.container = {

            //Functions for managing state
            getState: function (state) {
                return state !== undefined ? component.state[state] : component.state
            },

            setState: function (state) {
                component.setState(state)
            },

            //Indicates if the grid has been populated with data
            gridPopulated: function(){
                return Boolean(component.state.feed.length);
            },

            //Functions for managing filters
            addFilter: function(criteria,label){
                component.state.appliedFilters.push({'label':label,'criteria': criteria});
                return component.state.appliedFilters;
            },
            removeFilter: function(filterLabel){
                return component.state.appliedFilters.filter(function(filter){
                    return filter.label !== filterLabel;
                })
            },
            getAppliedFilters:function(){
                return component.state.appliedFilters;
            },
            getAppliedCategories:function(){
                return component.state.appliedCriteria;
            },
            addCategory:function(criteria){
                component.state.appliedCriteria.push(criteria)
            }


        }
    }


    render() {

        return (
            <div id={"page"} className={!this.container.getState('feed').length ? 'no-grid' : 'product-grid-loaded'}>

                <Header container={this.container}/>
                <ProductGrid container={this.container}/>
            </div>
        );
    }
}

export default App;