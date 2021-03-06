import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { WishlistContext } from "./WishlistContext";

const Tshirt = (props) => {
  // eslint-disable-next-line
  const [wishlist, setWishlist] = useContext(WishlistContext);

  // eslint-disable-next-line
  const [cart, setCart] = useContext(CartContext); //context gives access to the state and set state function

  //addToCart function creates an object with 2 keys, name & price from props
  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price, key: props.id };
    setCart((currentCart) => [...currentCart, tshirt]); // currentCart is the current state, making a copy of current cart and adding the new object
  };

  const addToWishlist = () => {
    const newWish = { name: props.name, price: props.price, key: props.id };

    setWishlist((currentList) => [...currentList, newWish]);
  };

  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <br />
        <img src={props.image} alt={props.name} />
        <h3>£{props.price.toFixed(2)}</h3>
        <div className="btndiv">
          <button onClick={addToCart}>Add to cart</button>
          <button onClick={addToWishlist}>Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default Tshirt;
