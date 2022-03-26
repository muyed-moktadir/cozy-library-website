import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart,product} =props;
    // console.log(props);
    const {image,price,name}=product;
    return (
        <div className='product'>
            <img src={image} alt=""/>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;