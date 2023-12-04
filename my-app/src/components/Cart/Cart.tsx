import { EventProps } from "../Card";
import styles from "./Cart.module.scss";

export interface CartProps {
  cartEvents: EventProps[];
  addToCart: (clickedItem: EventProps) => void;
  removeFromCart: (id: number) => void;
}

const Cart = ({ cartEvents, addToCart, removeFromCart }: CartProps) => {
  return (
    <>
      <div className={styles.cartContainer}>
        <div>Your Cart</div>
        <div>{cartEvents.length === 0 ? <p>No Events in cart.</p> : null}</div>
      </div>
    </>
  );
};

export default Cart;
