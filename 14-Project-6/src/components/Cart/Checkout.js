import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const nameInputRef = useRef('');
  const streetInputRef = useRef('');
  const postalCodeInputRef = useRef('');
  const cityInputRef = useRef('');

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const isNotEmpty = (input) => input.trim() !== '';
  const isFiveChars = (input) => input.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalCodeInput = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;

    const nameInputIsValid = isNotEmpty(nameInput);
    const streetInputIsValid = isNotEmpty(streetInput);
    const postalCodeInputIsValid = isFiveChars(postalCodeInput);
    const cityInputIsValid = isNotEmpty(cityInput);

    setFormInputsValidity({
      name: nameInputIsValid,
      street: streetInputIsValid,
      postalCode: postalCodeInputIsValid,
      city: cityInputIsValid,
    });

    const formIsValid =
      nameInputIsValid &&
      streetInputIsValid &&
      postalCodeInputIsValid &&
      cityInputIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit data
    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postalCode: postalCodeInput,
      city: cityInput,
    });
  };

  const addControlClasses = (inputField) => {
    return `${classes.control} ${inputField ? '' : classes.invalid}`;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={addControlClasses(formInputsValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {formInputsValidity.name ? '' : <p>Field cannot be empty</p>}
      </div>
      <div className={addControlClasses(formInputsValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {formInputsValidity.street ? '' : <p>Field cannot be empty</p>}
      </div>
      <div className={addControlClasses(formInputsValidity.postalCode)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {formInputsValidity.postalCode ? (
          ''
        ) : (
          <p>Input must be 5 characters long</p>
        )}
      </div>
      <div className={addControlClasses(formInputsValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {formInputsValidity.city ? '' : <p>Field cannot be empty</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
