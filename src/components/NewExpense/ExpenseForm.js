import React, { useState } from 'react';
import './ExpenseForm.css';
import '../Expenses/Expenses';

const ExpenseForm = props => {
  // MULTIPLE STATE APPROACH
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // String user input
  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
  };

  const clearInputs = function () {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const submitHandler = function (e) {
    e.preventDefault();

    // Generating data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Passing data up to NewExpense component
    props.onSaveExpenseData(expenseData);
    clearInputs();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

// ONE STATE APPROACH
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

// console.log(userInput);

// const titleChangeHandler = function (e) {
//   setUserInput(prev => {
//     return { ...prev, enteredTitle: e.target.value };
//   });
// };

// const amountChangeHandler = function (e) {
//   setUserInput(prev => {
//     return { ...prev, enteredAmount: e.target.value };
//   });
// };

// const dateChangeHandler = function (e) {
//   setUserInput(prev => {
//     return { ...prev, enteredAmount: e.target.value };
//   });
// };
