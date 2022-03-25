import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    let name;
    //let newName=[];
    for (const product of cart){
        name=product.name;
        
    }



    return (
        <div>
            <h1>Books Summary</h1>
            <h3>Author's Name: {name}</h3>
        </div>
    );
};

export default Cart;