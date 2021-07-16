import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  // by default error is set to falsy value, here 'undefined'
  const [error, setError] = useState();

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

    if (enteredUserName.trim().length === 0 || enteredAge.length === 0) {
      setError({
        title: 'Invalid inpute',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      resetInputFields();
      return;
    }

    if (+enteredAge <= 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });
      resetInputFields();
      return;
    }

    props.onAddUser(enteredUserName, +enteredAge);
    console.log(enteredUserName, enteredAge);
    resetInputFields();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
