import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = `$${props.price}`;
    return(
        <li key={props.id} className={classes.meal}>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <h3 className={classes.price}>{price}</h3>
          <MealItemForm />
        </li>
    )
};

export default MealItem;