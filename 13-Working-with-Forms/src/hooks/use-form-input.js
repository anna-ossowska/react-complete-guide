import { useState } from 'react';

const useFormInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueIsTouched, setValueisTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const valueInputHasError = !valueIsValid && valueIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setValueisTouched(true);
  };

  const resetInput = () => {
    setEnteredValue('');
    setValueisTouched(false);
  };

  return {
    value: enteredValue,
    isTouched: valueIsTouched,
    valueIsValid,
    hasError: valueInputHasError,
    valueChangeHandler,
    valueBlurHandler,
    resetInput,
  };
};

export default useFormInput;
