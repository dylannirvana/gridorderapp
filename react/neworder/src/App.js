/*
* Entry point for the App
 */

import React, {Component} from 'react';


import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.scss';
import FilterFactory from "./components/GridControls/Filters/FilterFactory";


class App extends Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            feed: [], //The  parsed JSON obtained from PapaParse
            grid: [], // filtered grid
            filterFactory: new FilterFactory(),


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

            getFeed: function(){
                return component.state.feed;
            },

            getGridProducts: function(){
                return component.state.grid;
            },

            update: function (){
                component.forceUpdate();
            },

            //Indicates if the grid has been populated with data
            gridPopulated: function () {
                return Boolean(component.state.feed.length);
            },

            getFilterFactory: function () {
                return component.state.filterFactory;
            },

            initFilters: function () {
                component.state.filterFactory.updateContext(component.state.feed);
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