import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) return;

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setEnteredEmail('');

    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameInputClasses = enteredNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
