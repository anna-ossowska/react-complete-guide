import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isClicked, setIsClicked] = useState(false);

  // Receiving data from ExpenseForm component
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Passing data up to App component
    props.onAddExpense(expenseData);

    // Update state
    setIsClicked(false);
  };

  const clickAddNewHandler = function (e) {
    setIsClicked(true);
  };

  const cancelAddNew = function () {
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {!isClicked ? (
        <button onClick={clickAddNewHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickAddNew={isClicked}
          onCancel={cancelAddNew}
        />
      )}
    </div>
  );
};

export default NewExpense;
