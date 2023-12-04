import "./App.scss";
import Card from "./components/Card";
import Cart, { CartProps } from "./components/Cart/Cart";
import SearchAppBar from "./components/SearchAppBar";
import { CartProvider } from "./components/context/CartContext";

const cartProps: CartProps = {
  cartEvents,
  addToCart,
  removeFromCart,
};

function App() {
  return (
    <div className="App">
      <CartProvider>
        <SearchAppBar />
        <Card />
        <Cart {...cartProps} />
      </CartProvider>
    </div>
  );
}

export default App;
