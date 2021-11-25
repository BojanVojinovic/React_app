import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enterTitle: '',
    enterAmount: '',
    enterDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enterTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enterAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enterDate: event.target.value
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="02022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
