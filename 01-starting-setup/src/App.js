import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  const onAddNewExpenseHandler = (expense) => {
    console.log("im in app js\n");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <Card>
      <h2>Let's get started!</h2>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
