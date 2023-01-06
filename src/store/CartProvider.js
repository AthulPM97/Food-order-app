import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems([...items, item]);
  };

  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
