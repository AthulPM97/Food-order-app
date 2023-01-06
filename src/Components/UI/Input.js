import classes from "./Input.module.css";

const Input = (props) => {

  const inputChangeHandler = (event) => {
    const input = event.target.value;
    props.onInputChange(input);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={inputChangeHandler}/>
    </div>
  );
};

export default Input;
