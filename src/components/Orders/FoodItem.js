// FoodItem.js
import React, { useState } from 'react';
import "./FoodItem.css"
//import berger from "./photos/berger.jpg";
const FoodItem = ({ food, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
   console.log(food);
  const handleAddToCart = () => {
    addToCart({ ...food, quantity });
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  return (
    <div className='Food-item'>
      < img src={food.imgpath} className="food-image" alt="Burger" />
      
      <h3>{food.name}</h3>
      <p>Price: Rs {food.price}</p>
      <button className="handlecart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
