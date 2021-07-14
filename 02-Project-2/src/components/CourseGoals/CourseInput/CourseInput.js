import React, { useState } from 'react';
import './CourseInput.css';

import styled, { css } from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  /* Targetting nested element */
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'salmon' : '#ccc')};
    background: ${(props) =>
      props.invalid ? 'rgb(248, 223, 220)' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #ecb5da;
    border-color: #8b005d;
  }

  /* &.invalid input {
    border: 'salmon' 1px solid;
    background-color: rgb(248, 223, 220);
  } */

  /* &.invalid label {
    color: red;
  } */

  /* ${(props) =>
    props.primary &&
    css`
      background: #f4f4f4;
      padding: 1rem;
    `} */
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid ? 'invalid' : ''}> */}
      {/* <FormControl className={!isValid && 'invalid'}> */}
      <FormControl invalid={!isValid} primary>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
