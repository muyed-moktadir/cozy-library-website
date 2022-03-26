import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import ChooseOne from '../chooseOne/ChooseOne';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] =useState([])
    const [cart,setCart]=useState([])
    const [chooseOneBook,setChooseOneBook]=useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    // TODO:add add to cart event handler:
    let newCart=[];
    const handleAddToCart =(selectedProduct)=>{
        const existsBook=cart.find(product=> product.id===selectedProduct.id)
        if(!existsBook && cart.length<4){
         newCart=[...cart,selectedProduct];
        setCart(newCart);
       }
       else {
           console.log('duplicate not allowed and and select only 4 books')
       }       
    }
    // TODO: empty card for Choose again:
        const emptyCard =()=>{
            setCart([]);
        }
    // TODO:choose only one book:  
    const chooseOneForme=()=>{
        let onlyOneBook=[];
         onlyOneBook =[ cart[Math.floor(Math.random() * cart.length===1)]];
            setChooseOneBook(onlyOneBook);     
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
                        cart.map(product=><Cart 
                        cart={cart} 
                        key={product.id} 
                        name={product.name}>
                        </Cart>)
                    }
                    <button onClick={chooseOneForme} className='choose-btn'><p className='choose-btn-text'>Choose 1 For Me</p></button>
                    <br /><br />
                    {
                      chooseOneBook.map(book=><ChooseOne key={book.id} book={book}></ChooseOne>)
                    }
                    <button onClick={emptyCard} className='choose-btn'><p className='choose-btn-text'>Choose Again</p></button>
            
            </div>
            
        </div>
    );
};

export default Shop;