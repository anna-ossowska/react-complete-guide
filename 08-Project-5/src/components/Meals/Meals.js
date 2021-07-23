import React, { Fragment } from 'react';
import Cart from '../Cart/Cart';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      <Cart />
    </Fragment>
  );
};

export default Meals;
