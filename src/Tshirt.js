import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Tshirt = (props) => {
  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext); //context gives access to the state and set state function

  //addToCart function creates an object with 2 keys, name & price from props
  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart((currentCart) => [...currentCart, tshirt]); // currentCart is the current state, making a copy of current cart and adding the new object
  };

  return (
    <>
    <div >
      <h2>{props.name}</h2>
      <br />
      <img src={props.image} alt={props.name} />
      <h3>£{props.price.toFixed(2)}</h3>
      <button onClick={addToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default Tshirt;
