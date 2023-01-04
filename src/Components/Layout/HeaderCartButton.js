import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useState } from "react";
import Modal from "../Cart/Modal";

const HeaderCartButton = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    return () => {
      setClicked(true);
    };
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      {clicked && <Modal />}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
