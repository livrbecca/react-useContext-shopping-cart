import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (acc, currentCart) => acc + currentCart.price,
    0
  );
  return (
    <div className="cartContainer">
      <span>Items in cart : {cart.length}</span>
      <br />
      <span>Total price: £{totalPrice.toFixed(2)} </span>
    </div>
  );
};

export default Cart;
