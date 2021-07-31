import React, { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const url =
    'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

  const fetchMeals = async () => {
    setIsLoading(true);

    // Clearing any previous errors
    setHasError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      let loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setHasError(err.message || 'Data cannot be displayed');
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  let content = '';

  if (hasError) {
    content = <p className={classes['error-text']}>{hasError}</p>;
  }

  if (isLoading) {
    content = <p className={classes['loading-text']}>Loading...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {content}

          {meals.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
