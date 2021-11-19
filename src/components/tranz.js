/* import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
const oo = ''
const Tranz = () => {
    const [income, setIncome] = useState({
     incomeText: '',
     incomeAmount: 0, 
    })
  
 const onChangeIncome = (e) => {
      setIncome({...income,[e.target.name]: e.traget.value})   
 }

const onSubmitIncome = (e) => {
e.preventDefault()
}



console.log(income)
    return (
        <div className="form-wrapper">
            <form onSubmit={}>
                <div className="input-group income">
                <input name="incomeText" type="text" placeholder="Add income" autoComplete="off"  onChange={onChangeIncome}></input>
                <input name="incomeAmount" type='number' placeholder="Amount" autoComplete="off"  onChange={onChangeIncome}></input>
                <input type="submit" vlaue="submit"></input>
                </div>
                 </form>
                 
                 <form>
                  <div className="input-group expense">
                <input type="text" placeholder="Add expense" autoComplete="off"></input>
                <input type='number' placeholder="Amount" autoComplete="off"></input>
                <input type="submit" vlaue="submit"></input>
                </div>   
                 </form>
                
           
        </div>
    )
}

export default Tranz  */

import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: [""],
    incomeAmount: [0]
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
