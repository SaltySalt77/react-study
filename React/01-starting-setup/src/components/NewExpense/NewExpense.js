import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const removeDropdownHandler = () => {
    setDropdown(<button onClick={showDropdown}>Add Expense</button>);
  };

  const showDropdown = () => {
    setDropdown(
      <ExpenseForm
        onCancel={removeDropdownHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  };

  const [dropdown, setDropdown] = useState(
    <button onClick={showDropdown}>Add Expense</button>
  );

  return <div className="new-expense">{dropdown}</div>;
};

export default NewExpense;
