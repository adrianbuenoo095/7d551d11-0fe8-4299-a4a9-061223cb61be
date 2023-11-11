import styles from "./Cart.module.scss";

// interface CartProps {
//   cartEvents: EventProps[];
//   addToCart: (clickedItem: EventProps) => void;
//   removeFromCart: (id: number) => void;
// }

const Cart = () => {
  return (
    <>
      <div className={styles.cartContainer}>
        <div>Your Cart</div>
        {/* <div>{cartEvents.length === 0 ? <p>No Events in cart.</p> : null}</div> */}
      </div>
    </>
  );
};

export default Cart;
