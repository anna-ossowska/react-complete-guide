import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // registering a state value
  const [title, setTitle] = useState(props.title);
  // console.log('Expense Item evaluated');

  const clickHandler = function () {
    console.log(title);
    setTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        {/* Child component */}
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
