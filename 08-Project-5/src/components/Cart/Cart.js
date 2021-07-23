import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  // DUMMY Cart items
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  // The outside div will be modal component later on
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>$ 30.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
