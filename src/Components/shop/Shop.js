import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import ChooseOne from '../chooseOne/ChooseOne';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] =useState([])
    const [cart,setCart]=useState([])
    const [chooseOne,setChooseOne]=useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    // TODO:add event handler:
    const handleAddToCart =(selectedProduct)=>{
        let newCart=[];
        const existsBook=cart.find(product=> product.id===selectedProduct.id)
        if(!existsBook && cart.length<4){
         newCart=[...cart,selectedProduct];
        setCart(newCart);
       }
       else {
           console.log('duplicate not allowed and and also select only 4')
       }       
    }
    // TODO: empty card:
        const emptyCard =()=>{
            setCart([]);
            setChooseOne([]);
        }

    // TODO:choose only one book:
    
    const chooseOneForme=()=>{
        let onlyOneBook=[];
        onlyOneBook=[chooseOne[Math.floor(Math.random() * chooseOne.length)]];
        setChooseOne(onlyOneBook);
        console.log(onlyOneBook)

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
                <h1>Selected Books</h1>
                    {
                        cart.map(product=><Cart cart={cart} key={product.id} name={product.name}>

                        </Cart>)
                    }
                    <button onClick={()=>chooseOneForme()} className='choose-btn'><p className='choose-btn-text'>Choose 1 For Me</p></button>
                    <br /><br />
                    {/* {
                      cart.map(chooseOne=><ChooseOne key={chooseOne.id} name={chooseOne.name}></ChooseOne>)  
                    } */}
                    <button onClick={emptyCard}    className='choose-btn'><p className='choose-btn-text'>Choose Again</p></button>
            
            </div>
            
        </div>
    );
};

export default Shop;