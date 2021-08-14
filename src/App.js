import { useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// Working
// app js will show you Meals, meals will show you ,available meals , available meals ->meal item ->MealItemForm
// from MealItemForm you will click on add which will trigger a add function in meal item , in that add function 
// items will be added using cart context , now when you will click on cart , you will be in cart in modal
// from where you will be sent into the function cartModalContent which will on checking is checkout which is false initially
// will sent you to modalActions function where you can click on oreder to call order function handler which will set
// isCheckout true and will give you the form which has name checkout(<Checkout />) in cartModalContent from where you
// can give your address and confirm it thereby submitting the details in the database
// 
// 
// 
