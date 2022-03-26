import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'

const Cart = ({name}) => {

    return (
        <div className='cart'>
            <h3>Author's Name: {name}</h3>
            <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;