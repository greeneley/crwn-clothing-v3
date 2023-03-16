import React, { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { CartDropDownContainer } from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckoutHandler = (event) => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button style={{ fontSize: 12 }} onClick={gotoCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
