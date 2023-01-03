import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return(
        <button className={classes.button}>
            {props.children}
            <div>0</div>            
        </button>
    )
}

export default HeaderCartButton;