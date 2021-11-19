 /* import React, { useContext } from 'react'
import Expense from './expense'
import {  GlobalContext } from '../context/globalState'

const ExpenseList = () => {
    const { expense } = useContext(GlobalContext)
    //console.log(expense.expense)
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
            {expense.map(expenseOrder => (
         <Expense
         key={expense.id}
         expenseOrder={expenseOrder} />
               
    ))}
            </ul>
        </div>
    )
}

export default ExpenseList */

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
