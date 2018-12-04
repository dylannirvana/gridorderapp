import React from "react";
import {
        Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle} from 'reactstrap';

const Product = (props) => {


const {product} = props;
        return(
        <Col className="col-md-4 col-sm-6 grid-item">
             <Card>
                 <CardTitle>
                     {product.name}
                     <small className="text-muted neworder">{product.sku}</small>
                 </CardTitle>
                 <CardImg top width="100%" src="https://circaskin.circalighting.com/media/catalog/product/cache/1/image/480x/9df78eab33525d08d6e5fb8d27136e95/s/n/sn4001pn_7.png" alt="Card image cap" />
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
                        <div className="btn-group"></div>
                        <small className="text-muted name">{product.designer}</small>
                    </div>
                </CardBody>
             </Card>

        </Col>

        )

}



export default Product;