import React, { useState, useEffect, useCallback } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const url =
    'https://react-http-92c39-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      let loadMeals = [];

      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
    } catch (err) {
      console.error(err);
    }
  }, []);

  console.log(meals);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
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
