import React from 'react';
import Product from "./Product/Product";
import {
    Row,
    Col,
    Jumbotron
}
    from 'reactstrap';

import Packery from 'packery';
import Draggabilly from 'draggabilly';

import FileUploader from '../FileUploader';



class ProductGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            draggie: [],
            packery: null
        };
    }

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
                            !this.props.container.getState('feed').length &&
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


        var packeryInstance = new Packery('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true
        });

        //Make the products Dragable
        packeryInstance.getItemElements().forEach(function (itemElem) {
            var draggie = new Draggabilly(itemElem);
            packeryInstance.bindDraggabillyEvents(draggie);
            component.state.draggie.push(draggie);
        });

        this.setState({
            packery: packeryInstance
        });

        window.pckry = packeryInstance;


    }

    destroyPackery() {
        console.log('DESTROY PACKERY')
        if (this.state.draggie.length) {
            this.state.draggie.forEach(function (itemElem) {
                itemElem.destroy();
            });
            this.state.packery.destroy();

            this.setState({draggie: [], packery: null})
            this.props.container.setState({'packeryRefresh': true})
        }


    }



    //This function is executed every time this component is rendered
    componentDidUpdate() {

        const component = this;

        if (this.props.container.getState('packeryRefresh')) {

            this.destroyPackery();

            this.initPackery();

            this.props.container.setState({'packeryRefresh': false})

        }


    }


}

export default ProductGrid;
