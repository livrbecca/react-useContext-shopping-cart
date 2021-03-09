import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

const Wishlist = (props) => {
  const [wishlist] = useContext(WishlistContext);
  console.log(wishlist);

  if (wishlist.length >= 1) {
    console.log(wishlist[0].name);
  }

  return (
    <div className="wishContainer">
      <span>Items in Wishlist : {wishlist.length}</span>
      <ul>
        {wishlist.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
