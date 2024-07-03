// App.js

import "./index.css";
import React, { useState } from 'react';
import FoodItem from './FoodItem';
import Cart from './Cart';
import axios from 'axios';
import foodItems from './fooditems';
import {Link } from  'react-router-dom';
import OrderForm from './OrderForm';

const App = () => {
const[disp,setDisp]=useState(false);
const[dispO,setDispO]=useState(false);
const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const calculateTotalBill = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = async(orderData) => {
    // Handle placing the order (e.g., send a request to your server)
    const response = await axios.post('http://localhost:5000/order', orderData);
    console.log('Placing order:', orderData);
   
    // Clear the cart after placing the order
    if(response.status===200){
      setCart([]);
    }
  };

  const handleCartDisp=()=>{
    setDisp(!disp);
  };

  const handleOrder=()=>{
    setDispO(!dispO);
  };
  return (
    <div className="menu">
     <div className="inner-nav-menu">
      <div className="cartbtn">
           { (!disp) && <Link to="/"> <button className="back_btn" ><i className="fa fa-arrow-left"></i></button></Link>}
            <button className="ctr_btn" onClick={handleCartDisp} >{(!disp)? ( <button className="cart_btn" >  {cart.length > 0 && <div className="red-dot">{cart.length}</div>}<i className="fa fa-shopping-cart"></i></button> ):(<button className="back_btn" ><i className="fa fa-arrow-up"></i></button>)}</button>
             { disp && <div className="cart">
                <Cart cart={cart} removeFromCart={removeFromCart} />
                <p className="bill">Total Bill: Rs {calculateTotalBill()}</p>
                <button className="order_btn" onClick={handleOrder} >Place Order</button>
               
                {dispO && <div className="order-section">
                       <OrderForm cart={cart} placeOrder={placeOrder} />
                 </div> }
             </div>}
            
      </div>
     </div>
      {(!disp) && <div >
         <h1 className="mheading">MENU</h1>
         <div className="food-items">
        {foodItems.map((food) => (
            <FoodItem key={food.id} food={food} addToCart={addToCart} /> 
        ))}
        </div>
      </div>}
      
    </div>
  );
};

export default App;
