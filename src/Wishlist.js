import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

const Wishlist = (props) => {
  const [wishlist] = useContext(WishlistContext);
 


  return (
    <div className="wishContainer">
      <span>Items in Wishlist : {wishlist.length}</span>
      <ul>
        {wishlist.map((item, key) => {
          return <li key={key}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
