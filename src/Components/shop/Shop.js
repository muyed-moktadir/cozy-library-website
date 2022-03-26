import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] =useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    // TODO:add event handler:
    const [cart,setCart]=useState([])
    const handleAddToCart =(selectedProduct)=>{
        const existsBook=cart.find(product=> product.id===selectedProduct.id)
        if(!existsBook && cart.length<4){
        const newCart=[...cart,selectedProduct];
        setCart(newCart);
       }
       else {
           console.log('duplicate not allowed and and also select only 4')
       }    
    }
    return (
        
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Books Summary</h1>
                    {
                        cart.map(product=><Cart name={product.name}>
                            
                        </Cart>)
                    }
            
            </div>
        </div>
    );
};

export default Shop;