import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

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

    props.onAddUser(enteredUserName, +enteredAge);

    console.log(enteredUserName, enteredAge);
    resetInputFields();
  };

  return (
    <div>
      <ErrorModal title="An error occured" message="Something went wrong" />
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
