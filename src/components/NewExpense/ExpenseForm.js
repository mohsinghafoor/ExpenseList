import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmmount, setNewAmmount] = useState("");
  const [newDate, setNewDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmmount: "",
  //     enteredDate: "",
  //   });
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };
  const handleAmmountChange = (e) => {
    setNewAmmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmmount: e.target.value };
    // });
  };
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: newTitle,
      ammount: newAmmount,
      date: new Date(newDate),
    };
    props.onSaveExpense(expenseData);
    setNewAmmount("");
    setNewTitle("");
    setNewDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={newTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmmountChange}
            value={newAmmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={newDate}
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
