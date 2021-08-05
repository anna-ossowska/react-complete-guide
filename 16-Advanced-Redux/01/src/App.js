import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { sendCartData } from './store/cart-slice';

let isInitial = true;

function App() {
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  // useSelector sets up the subscirption, so whenever the Redux store changes,
  // the whole component is updated
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // Before we always dispatched action creators - fns that return an action object with a type, and so on
    // Here we dispatch a fn that return another fn
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

/*
useEffect(() => {
  const cartData = async () => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );
    const response = await fetch(
      'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  };

  // If it returns, code does not procede to the next lines responsible for making the PUT request
  // It blocks the cart from being sent when the Effect executes for the first time, so when application starts
  if (isInitial) {
    isInitial = false;
    return;
  }

  cartData().catch((err) => {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed.',
      })
    );
  });
}, [cart, dispatch]);
*/
