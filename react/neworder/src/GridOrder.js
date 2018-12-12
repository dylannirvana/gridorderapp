import React, {Component} from 'react';


import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import './GridOrder.scss';

class GridOrder extends Component {

    constructor(props) {
        super(props);
        const component = this;

        this.state = {
            feed: [], //The  parsed JSON obtained from PapaParse
            grid: []

        };

        this.container = {

            getState: function (state) {
                return state !== undefined ? component.state[state] : component.state
            },

            setState: function (state) {
                component.setState(state)
            },
            gridPopulated: function(){
                return Boolean(component.state.feed.length);
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

export default GridOrder;