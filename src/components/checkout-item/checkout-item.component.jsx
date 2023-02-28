import React from "react";
import "./checkout-item.styles.scss";
import Button from "../button/button.component";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="description">{name}</span>
      <div className="quantity-container">
        <span className="quantity">{quantity}</span>
      </div>
      <span className="price">{price}</span>
      <Button>Remove</Button>
    </div>
  );
};

export default CheckoutItem;
