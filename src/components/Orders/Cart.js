// Cart.js
import React from 'react';

import "./cart.css";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <div className='items'>
      {cart.map((item, index) => (
        <div key={index} className='item'>  
          <p>{item.name}</p>
          <p>Price: Rs {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    
      ))}
      </div>
    </div>
  );
};

export default Cart;
