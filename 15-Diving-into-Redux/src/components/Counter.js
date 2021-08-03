import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  // fn which will dispatch an action against the redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // console.log(store.getState());
  };

  const increaseHanlder = () => {
    // Redux Toolkit will create action object which it dispatches
    dispatch(counterActions.increase(10)); // {type: UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHanlder}>+ 10</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
