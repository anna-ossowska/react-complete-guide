import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isVisible = useSelector((state) => state.ui.cartIsVisible);
  // useSelector sets up the subscirption, so whenever the Redux store changes,
  // the whole component is updated
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    fetch(
      'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
