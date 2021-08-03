import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Cart = (props) => {
  const isShown = useSelector((state) => state.isShown);
  const cartItems = useSelector((state) => state.items);

  console.log('caaart', cartItems);

  return (
    <Fragment>
      {isShown && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={{
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    desscription: item.desscription,
                    quantity: item.quantity,
                    total: item.total,
                  }}
                />
              );
            })}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
