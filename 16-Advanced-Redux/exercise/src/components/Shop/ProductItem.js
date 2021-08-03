import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items);
  console.log(cartItems);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        description: props.description,
        quantity: 1,
      })
    );
  };

  return (
    <li className={classes.item} key={props.id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
