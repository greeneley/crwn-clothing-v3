import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import CheckoutItem from "../checkout-item/checkout-item.component";

function Checkout(props) {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="cart-item">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
