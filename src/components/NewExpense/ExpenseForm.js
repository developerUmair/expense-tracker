import { useState } from "react";
import "../.././styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");

  /*   const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
    /*
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    }) */
    /* setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    }); */
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
    /*  setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    event.target.reset();
    /* setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate(""); */
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            // value={enteredTitle} 
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            // value={enteredAmount}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-30"
            onChange={dateChangeHandler}
            // value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
