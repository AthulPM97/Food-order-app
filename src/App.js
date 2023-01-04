import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    console.log("showcart")
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart && <Cart onClose={closeCartHandler}/>}
      <Header onClickCart={showCartHandler}/>
      <Meals/>
    </div>
  );
}

export default App;
