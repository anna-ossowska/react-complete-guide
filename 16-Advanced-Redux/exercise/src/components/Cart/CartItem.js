import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import { createAction } from '@reduxjs/toolkit';

const CartItem = (props) => {
  const { id, title, price, description, quantity, total } = props.item;
  console.log(total);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
        quantity,
        total,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(
      cartActions.removeItem({
        id,
        title,
        price,
        description,
        quantity,
        total,
      })
    );
  };

  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
