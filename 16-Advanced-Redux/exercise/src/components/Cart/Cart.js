import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Cart = (props) => {
  const isShown = useSelector((state) => state.isShown);
  const cartItems = useSelector((state) => state.items);

  const cartMessage =
    cartItems.length === 0 ? (
      <h2 className={classes['cart-msg']}>
        Nothing has been added to your cart yet
      </h2>
    ) : (
      <h2 className={classes['cart-msg']}>Your Shopping Cart</h2>
    );

  return (
    <Fragment>
      {isShown && (
        <Card className={classes.cart}>
          {cartMessage}
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
