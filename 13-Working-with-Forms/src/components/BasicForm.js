import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsTouched, setNameisTouched] = useState(false);

  const nameIsValid = enteredName !== '';
  const nameInputHasError = !nameIsValid && nameIsTouched;

  let formIsValid = false;

  if (nameIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameBlurHandler = () => {
    setNameisTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameisTouched(true);

    if (!nameIsValid) return;

    console.log(enteredName);
    console.log(nameIsValid);

    setEnteredName('');
    setNameisTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Field cannot be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
