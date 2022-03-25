import React from 'react';
import './Product.css'

const Product = (props) => {
    const{product}= props;
    const {image,price,name}=product;
    return (
        <div className='product'>
            <img src={image} alt=""/>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;