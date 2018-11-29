import React from "react";


const Product = (props) => {


const {product} = props;
        return(
            <div>SKU: {product.sku}</div>
        )

}



export default Product;