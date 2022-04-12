import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  const titleChangedHandler = function (e) {
    setEnteredTitle(e.target.value);
    //console.log(enteredTitle);
  };
  const amountChangedHandler = function (e) {
    setEnteredAmount(e.target.value);
  };
  const dateChangedHandler = function (e) {
    setEnteredDate(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData); // sending data from child to parent
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={dateChangedHandler}
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
  );
};

export default ExpenseForm;
