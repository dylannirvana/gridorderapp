/*
* Entry point for the App
 */

import React, {Component} from 'react';


import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.scss';
import FilterCategory from "./components/GridControls/Filters/FilterCategory";


class App extends Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            feed: [], //The  parsed JSON obtained from PapaParse
            grid: [], // filtered grid

            filterCategories: [],

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
            gridPopulated: function () {
                return Boolean(component.state.feed.length);
            },

            initFilterCategory: function () {

                this.setState({
                    filterCategories: [
                        new FilterCategory('category', component.state.feed, true),
                        new FilterCategory('function', component.state.feed)
                    ]
                })
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