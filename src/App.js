import { useState } from 'react';
import './App.css';
import Header from './components/Layout/header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';




function App() {

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = props => {
    setCartIsOpen(true);
  }

  const closeCartHandler = props => {
    setCartIsOpen(false);
  }

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCloseCart = {closeCartHandler} />}
      <Header onOpenCart = {showCartHandler}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;
