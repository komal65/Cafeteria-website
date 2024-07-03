// OrderForm.js
import React, { useState } from 'react';
import "./orderform.css"
import qr from "./photos/QR.webp"
const OrderForm = ({ cart, placeOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handlePlaceOrder = () => {
    // Validate customer information and ensure cart is not empty
    // if (customerName.trim() === '' || customerEmail.trim() === '' || cart.length === 0) {
    //   alert('Please provide customer information and add items to the cart.');
    //   return;
    // }

    // Prepare order data
    const orderData = {
      customerName,
      customerEmail,
      items: cart,
    };

    // Call the placeOrder function with orderData
    placeOrder(orderData);
  };

  return (
    <div className='order_sec'>
      {/* <h2>Place Order</h2> */}
      <input
        className='in'
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
       className='in'
        type="email"
        placeholder="Customer Email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      <h4 className='payment'>Scan and pay</h4>
      < img src={qr} className="qr_img" alt="Burger" />
      <button  className="confirm" onClick={handlePlaceOrder}>Confirm order</button>
    </div>
  );
};

export default OrderForm;
