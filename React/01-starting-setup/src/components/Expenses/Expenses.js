import "./Expenses.css";
import "./ExpenseItem.css";
import "./ExpensesList.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpensesFilter.js";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <li className="expenses-list">
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
}

export default Expenses;
