import React, {useState} from "react";

export const CartContext = React.createContext(); // need this line. 
//line 10 represents the whole app
//can add multiple contexts

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

  return <CartContext.Provider value={[cart, setCart]}>
      {props.children} 
      </CartContext.Provider>;
}; 
