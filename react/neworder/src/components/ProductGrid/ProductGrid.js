import React from 'react';
import Product from "./Product";
import {Row,
    Col,
    Jumbotron} from 'reactstrap';

import Packery from 'packery';
import Draggabilly from 'draggabilly';


//Imports isotope styles for grid layout
//import '../../../../../node_modules/isotope/dist/isotope.css';


// all this does is take the input file and render it to the DOM
class ProductGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draggie: []
        };
    }

    render() {


        return (
            <Jumbotron fluid={true} id={"page-content"}>
                <Row className="grid row">
                    <Col>
                        {
                            //Loop through the products
                            Object.values(this.props.grid).map(product =>
                                //Invokes and renders the Product Component
                                <Product
                                    key={product.sku}
                                    product={product}
                                />
                            )
                        }
                    </Col>
                </Row>
            </Jumbotron>
        )
    }

    initPackery() {
        var component = this;
        window.pckry = new Packery('.grid', {
            itemSelector: '.grid-item'
        });

        //Make the products Dragable
        window.pckry.getItemElements().forEach(function (itemElem) {
            var draggie = new Draggabilly(itemElem);
            window.pckry.bindDraggabillyEvents(draggie);
            component.state.draggie.push(draggie);
        });
    }

    destroyPackery() {
        this.state.draggie.forEach(function (itemElem) {
            itemElem.destroy();
        });
        window.pckry.destroy();
        window.pckry = undefined;
        this.state.draggie = [];
    }

    //This function is executed every time Product Grid Component is loaded with a new CSV file
    componentDidUpdate() {


        if (window.pckry == undefined) {
            //Initialize Packery
            this.initPackery();
        } else {
            console.log(' ============= RELOADING PCKRY ==============')
            this.destroyPackery();
            this.initPackery();

        }


    }


}

export default ProductGrid;
