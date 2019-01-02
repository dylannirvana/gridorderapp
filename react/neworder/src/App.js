/*
* Entry point for the App
 */

import React, {Component} from 'react';


import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.scss';
import FilterFactory from "./components/GridControls/Filters/FilterFactory";
import GridControls from "./components/GridControls";
import {Container, Jumbotron} from 'reactstrap';
import loaderIcon from './images/loader.gif';


class App extends Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            feed: [], //The  parsed JSON obtained from PapaParse
            filteredProducts: [], // filtered filteredProducts
            filterFactory: undefined,


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

                if(component.state.filterFactory === undefined){
                    component.state.filterFactory = new FilterFactory(state.feed,state.filteredProducts);
                    component.state.filterFactory.updateVisibleFilters();
                }


                component.setState(state);
            },

            getFeed: function(){
                return component.state.feed;
            },

            getGridProducts: function(){
                return component.state.filteredProducts;
            },

            update: function (){
                component.forceUpdate();
            },

            //Indicates if the filteredProducts has been populated with data
            gridPopulated: function () {
                return Boolean(component.state.feed.length);
            },

            getFilterFactory: function () {
             //   console.log(component.state.filterFactory)
                return component.state.filterFactory;
            },
            getFilteredProducts: function(){
                //console.log(component.state.filteredProducts)
                return component.state.filteredProducts;
            },

            initFilters: function () {

               // component.forceUpdate();
            }


        }

        return this;
    }


    render() {

        return (
            <div id={"page"} className={!this.container.getState('feed').length ? 'no-grid' : 'product-grid-loaded'}>

                <img src={loaderIcon} id="loader-icon" style={{display: 'none'}} alt="Loading"/>
                <Header container={this.container}/>

                <Jumbotron  id="app-intro" className={"text-center"}>
                    <Container>
                        <h1 className={"jumbotron-heading"}>Grid Order App</h1>
                        <p className={"lead text-muted"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Container>
                </Jumbotron>

                {/*Render the controls for controlling the product filteredProducts*/}
                <GridControls container={this.container}/>

                <ProductGrid container={this.container}/>
            </div>
        );
    }
}

export default App;