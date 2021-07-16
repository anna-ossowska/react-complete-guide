import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = props => {
  const submitHandler = function (e) {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age (in years) </label>
        <input type="number" id="age"></input>

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
