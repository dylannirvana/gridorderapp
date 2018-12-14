/*
*This component represents the Product displayed within the Product Grid
 */

import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';


const Product = (props) => {


    const {product} = props;

    product.category = product.category === undefined ? '' : product.category;
    return (

        //Render the Product as a BootStarp Card
        <div className={"grid-item " + product.category.split(' ')[0] + ' ' + product.function} id={"product-"+product.sku} data-sku={product.sku}>
            <Card>
                <CardTitle>
                    {product.name}
                </CardTitle>

                <small className="text-muted neworder">{product.sku}</small>

                <CardImg top
                         width="100%"
                         src={product.image}
                         alt="Card image cap"/>
                <CardBody>
                    <CardText>
                        {product.category}
                    </CardText>
                    <CardText>
                        {product.function}
                    </CardText>
                    <CardText>
                        {product.relatives}
                    </CardText>
                    <div className="product-info justify-content-between align-items-center">
                        <span className="text-muted name">{product.designer}</span>
                        <span className="text-muted neworder-label"></span>
                    </div>
                </CardBody>
            </Card>
        </div>


    )

}


export default Product;