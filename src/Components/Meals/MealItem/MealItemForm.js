import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState, useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext);

  const [userInputAmount, setUserInputAmount] = useState('1');

  const inputChangeHandler = (input) => {
    setUserInputAmount(input);
  }

  const addMealHandler = (event) => {
    const order = {
      id: props.itemInfo.name,
      name: props.itemInfo.name,
      price: props.itemInfo.price,
      quantity: userInputAmount
    }
    cartCtx.addItem(order);
    //console.log(props.itemInfo)// name: , description: , price: 
  } 

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }} onInputChange={inputChangeHandler}
      />
      <button type="button" onClick={addMealHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
