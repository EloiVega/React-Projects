import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

// const Dummy_data = [{ id: "c1", name: "mealA", amount: 1, price: 10.01 }];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1});
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          amount={meal.amount}
          price={meal.price}
          onRemove={cartItemRemoveHandler.bind(null, meal.id)}
          onAdd={cartItemAddHandler.bind(null, meal)}
        >
          {meal.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
