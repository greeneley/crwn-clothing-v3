import React, { useContext } from "react";
import "./checkout-item.styles";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItemContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemInCart, addItemToCart, decreaseItemInCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const decreaseItemHandler = () => decreaseItemInCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemInCart(cartItem);
  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div onClick={removeItemHandler} className="remove-button">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
