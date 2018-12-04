import React from 'react';
import Product from "../Product/Product";
import {Row} from 'reactstrap';

import Packery from 'packery';
import Draggabilly from 'draggabilly';

//Imports isotope styles for grid layout
import '../../../node_modules/isotope/dist/isotope.css';




// all this does is take the input file and render it to the DOM
class ProductGrid extends React.Component {

    render() {


        return (
            <Row className="grid row">

                {
                    //Loop through the products
                    Object.values(this.props.feed).map(product =>

                        //Invokes and renders the Product Component
                        <Product
                            key={product.sku}
                            product={product}
                        />
                    )
                }

            </Row>
        )
    }

    //This function is executed every time Product Grid Component is loaded with a new CSV file
    componentDidUpdate() {

        //Initialize Packery
        var pckry = new Packery('.grid', {
            itemSelector: '.grid-item'
        });

        //Make the products Dragable
        pckry.getItemElements().forEach(function (itemElem) {
            var draggie = new Draggabilly(itemElem);
            pckry.bindDraggabillyEvents(draggie);
        });

    }


}

export default ProductGrid;
