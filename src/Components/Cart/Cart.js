import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, quantity: 1});
  }

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  }
    
  const cartItems = cartCtx.items.map((item) => {
    return (
      <li key={item.id} className={classes["cart-item"]}>
        <h3 className={classes["item-name"]}>{item.name}</h3>
        <div className={classes.price}>${item.price}</div>
        <span className={classes.badge}>x{item.quantity}</span>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={removeItemHandler.bind(null, item.id)}>-</button>
          <button className={classes.button} onClick={addItemHandler.bind(null, item)}>+</button>
        </div>
      </li>
    );
  });

  const totalAmount = cartCtx.items
    .reduce((accumulator, item) => {
      return accumulator + item.price * parseInt(item.quantity);
    }, 0)
    .toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
