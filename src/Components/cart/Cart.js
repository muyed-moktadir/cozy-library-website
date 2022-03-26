import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({name}) => {
    return (
        <div className='cart'>
            <h3>author's name :{name}</h3>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;