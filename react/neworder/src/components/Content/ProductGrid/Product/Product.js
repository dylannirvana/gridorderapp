import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

//Import custom styles
import './Product.css';
import './ProductDrag.css';

const Product = (props) => {


    const {product} = props;

    return (

        //Render the Product as a BootStarp Card
        <div className=" grid-item element-item ceiling chandelier adele" data-category="">
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
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted name">{product.designer}</small>
                    </div>
                </CardBody>
            </Card>
        </div>


    )

}


export default Product;