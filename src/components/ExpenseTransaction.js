/*import React from 'react'
import {  GlobalContext } from '../context/globalState'

const Expense = ({ expenseOrder }) => {
    
    return (
        
             <li className="transaction">
           <span className="transaction-text">
               {expenseOrder.expenseText}
               </span>
           <span className="transaction-amount">
               ${expenseOrder.expenseAmount}
               </span>
           <button className="delete-btn">
            Delete
           </button>
                </li> 
       
    )
}

export default Expense */
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash">Del</i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
