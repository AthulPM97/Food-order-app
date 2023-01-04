import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" />
      <button type="button">+Add</button>
    </div>
  );
};

export default Input;
