/*
* This component represents the Product Grid
 */

import React from 'react';
import Product from "./Product";
import {
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

import Packery from 'packery';
import Draggabilly from 'draggabilly';

import FileUploader from '../GridControls/FileUploader';


class ProductGrid extends React.Component {

    render() {


        return (
            <Jumbotron fluid={true} id={"page-content"}>
                <Row className="grid">


                    <Col>
                        {
                            //Loop through the products
                            Object.values(this.props.container.getState('grid')).map(product =>
                                //Invokes and renders the Product Component
                                <Product
                                    key={product.sku}
                                    product={product}
                                />
                            )

                        }
                        {
                            //If there are no products uploaded via CSV, display the FileUploader component
                            !this.props.container.gridPopulated() &&
                            <FileUploader container={this.props.container}/>
                        }
                    </Col>

                </Row>
            </Jumbotron>
        )
    }

    //Initialize packery on the product grid and make the Bootstrap cards draggable
    initPackery() {

        const component = this;
        let dragableComponents = [];

        var packeryInstance = new Packery('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true
        });

        //Initialize instance of dragable component, which makes the products dragable
        packeryInstance.getItemElements().forEach(function (itemElem) {
            var draggie = new Draggabilly(itemElem);
            packeryInstance.bindDraggabillyEvents(draggie);
            dragableComponents.push(draggie);
        });

        //Update the new order of product tiles
        packeryInstance.on( 'dragItemPositioned', function(){

            this.getItemElements().forEach( function( element, index ) {
               const elementID = '#' + element.getAttribute('id');
               document.querySelector(elementID + ' .neworder-label').textContent = 'New Order: '+ (index+1);

            });

            //Adding CSS class .show-neworder-label shows the .neworder-label
            document.getElementById('page').classList.add('show-neworder-label');
        });

        component.props.container.setState({
            packery: packeryInstance,
            dragableComponents: dragableComponents
        });


    }

    //Destroys existing packery instance
    destroyPackery() {

        const component = this;
        const packeryInstance = component.props.container.getState('packery');

        if (packeryInstance) {
            //Destroy instances of dragable component, which makes the products dragable
            component.props.container.getState('dragableComponents').forEach(function (draggie) {

                draggie.destroy();
            });

            //Removing  CSS class .show-neworder-label hides the .neworder-label
            document.getElementById('page').classList.remove('show-neworder-label');

            //Destroy Packery Instance
            packeryInstance.destroy();
        }


        component.props.container.setState({
            packeryRefresh: false,
            dragableComponents: [],
            packery: false
        })


    }


    //This function is executed every time this component is updated
    componentDidUpdate() {


        if (this.props.container.getState('packeryRefresh')) {

            this.destroyPackery();

            this.initPackery();

            this.props.container.setState({'packeryRefresh': false})

        }


    }


}

export default ProductGrid;
