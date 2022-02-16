import { Fragment } from "react";
import styles from "./header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import CartButton from "./headerCartButton";



const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>MealsOfDreams</h1>
        <CartButton onClick = {props.onOpenCart}/>
      </header>
      <div className = {styles['main-image']}>
        <img src={mealsImage} alt="A table full of dream food!" />
      </div>
    </Fragment>
  );
};

export default Header;
