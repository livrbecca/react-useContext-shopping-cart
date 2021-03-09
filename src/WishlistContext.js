import React, { useState } from "react";

export const WishlistContext = React.createContext();

export const WishProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);

  return <WishlistContext.Provider value={[wishlist, setWishlist]}>
    {props.children}
  </WishlistContext.Provider>;
};
