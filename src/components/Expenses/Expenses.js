import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const saveSelectedYearHandler = function (selectedYear) {
    // Updating a year
    setSelectedYear(selectedYear);

    // Passing data up to App component
    props.onAddSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSaveSelectedYear={saveSelectedYearHandler}
        />
        {props.items.map(expense => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
