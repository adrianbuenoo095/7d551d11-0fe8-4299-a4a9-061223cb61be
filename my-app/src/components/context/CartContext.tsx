import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface CartState {
  cartCount: number;
}

type CartAction = { type: "INCREMENT" };

type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
  cartCount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, cartCount: state.cartCount + 1 };
    default:
      return state;
  }
};

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
