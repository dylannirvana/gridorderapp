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
            /*filters: {
                getRenderedFilters: function () {
                    let result = new Object();
                    let obj = component.state.filters;
                    console.log(Object.keys(obj))
                    console.log(obj)

                    for(let key in obj) {
                        console.log(key)
                    }
                    window.myObj = obj
                    Object.keys(obj).forEach(function (key) {

                        const value = obj[key];

                        if (value instanceof Filter && value.hasRendered()) {
                            result[key] = value;
                        }
                    })
                    return result;
                }
            },*/

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

                component.state.filterFactory.renderNextFilter(component.state.feed);
                //component.state.filterFactory.addFilter('category', component.state.feed, true)
                //component.state.filterFactory.addFilter('functions', component.state.feed, false)

            /*    this.setState({
                    filters: {
                        'category': new Filter([], 'category', component.state.feed, true),
                        'function': new Filter([], 'function', component.state.feed),

                    }
                })*/


                /*this.setState({
                    filterCategories: [
                        new Filter([],'category', component.state.feed, true),
                        new Filter([],'function', component.state.feed)
                    ]
                })*/
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