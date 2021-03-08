import "./App.css";
import TshirtList from "./TshirtList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

// NOTES.
// Everything wrapped inside the provider

function App() {
  return (
    <>
      <CartProvider>
        <h1 className="list">T-Shirts & Hoodies with useContext()</h1>
        <Cart />
        <TshirtList />
      </CartProvider>
    </>
  );
}

export default App;
