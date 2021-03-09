import "./App.css";
import TshirtList from "./TshirtList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import { WishProvider } from "./WishlistContext";
import Wishlist from "./Wishlist";

// NOTES.
// Everything wrapped inside the provider

function App() {
  return (
    <>
      <CartProvider>
        <WishProvider>
          <h1 className="list">T-Shirts & Hoodies with useContext()</h1>
          <Wishlist />
          <Cart />
          <TshirtList  />
        </WishProvider>
      </CartProvider>
    </>
  );
}

export default App;
