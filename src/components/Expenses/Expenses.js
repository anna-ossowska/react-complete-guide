import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const saveSelectedYearHandler = function (selectedYear) {
    // Updating a year
    setSelectedYear(selectedYear);

    // Passing data up to App component
    props.onAddSelectedYear(selectedYear);
  };

  const filteredItems = props.items.filter(
    expense => expense.date.getFullYear() + '' === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSaveSelectedYear={saveSelectedYearHandler}
        />
        <ExpensesList filteredItems={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;

// {/* Short-circuiting */}
// {filteredItems.length === 0 && <p>No expenses found</p>}
// {filteredItems.length > 0 &&
//   filteredItems.map(expense => {
//     return (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     );
//   })}
