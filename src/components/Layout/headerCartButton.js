import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useState } from "react";
import styles from "./headerCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartctx = useContext(CartContext);
  const { items } = cartctx;

  const numberOfCartItems = items.reduce(
    (current, item) => current + item.amount,
    0
  );

  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
