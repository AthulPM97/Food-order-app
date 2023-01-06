import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  const cartItems = cartCtx.items.map((item) => {
    return (
      <li key={item.id} className={classes["cart-item"]}>
        {item.name} <span> Qty: {item.quantity}</span>
        price: {item.price}
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
