import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import headerImage from '../../Assets/food background.jpg';

const Header = () => {
    return(
        <React.Fragment>
        <header className={classes.header}>
            <h2>React Meals</h2>
            <HeaderCartButton>Your Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
        <img src={headerImage} alt="A delicious burger"/>
        </div>
        </React.Fragment>
    )
}

export default Header;