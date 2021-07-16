import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const userNameChange = function (e) {
    setEnteredUserName(e.target.value);
  };

  const ageChange = function (e) {
    setEnteredAge(e.target.value);
  };

  const resetInputFields = function () {
    setEnteredUserName('');
    setEnteredAge('');
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      +enteredAge <= 0 ||
      enteredAge.length < 0
    ) {
      resetInputFields();
      return;
    }

    console.log(enteredUserName, enteredAge);
    resetInputFields();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          value={enteredUserName}
          type="text"
          id="username"
          onChange={userNameChange}
        ></input>
        <label htmlFor="age">Age (in years) </label>
        <input
          value={enteredAge}
          type="number"
          id="age"
          onChange={ageChange}
        ></input>

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
