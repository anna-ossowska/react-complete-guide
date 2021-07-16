import React, { useState } from 'react';
import styles from './UserForm.module.css';
import Button from '../UI/Button';

const UserForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const onChangeNameHandler = function (e) {
    setInputName(e.target.value);
  };

  const onChangeAgeHandler = function (e) {
    setInputAge(e.target.value + '');
  };

  const clearInputFields = function () {
    setInputName('');
    setInputAge('');
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    console.log(inputName, inputAge);

    const user = {
      userName: inputName,
      age: inputAge,
      id: Math.random().toString(),
    };
    // Pass data up to App.js
    props.onAddUser(user);
    clearInputFields();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className={styles['form-controls']}>
          <div>
            <label>User Name</label>
            <input
              value={inputName}
              type="text"
              onChange={onChangeNameHandler}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              value={inputAge}
              type="number"
              onChange={onChangeAgeHandler}
            />
          </div>
          <div className="btn-control">
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
