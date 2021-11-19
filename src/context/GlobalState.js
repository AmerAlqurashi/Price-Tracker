/* import React, { createContext, useReducer} from 'react'
import Reducer from './reducer'


const Transactions = {

     income: [
        { id:1, incomeText: 'salary', incomeAmount: 5000},
        { id:2, incomeText: 'stocks', incomeAmount: 3000},
        { id:3, incomeText: 'rent', incomeAmount: 10000}
     ],
    expense: [
        { id:4, expenseText: 'food', expenseAmount: 500},
        { id:5, expenseText: 'gas', expenseAmount: 200},
        { id:6, expenseText: 'travel', expenseAmount: 15000}
    
    ]
}

export const GlobalContext = createContext(Transactions) 

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, Transactions)

    return (
        <GlobalContext.Provider 
        value={{
            income: state.income,
            expense: state.expense
         }}>
            {children}
        </GlobalContext.Provider>
    )
} */
import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || []
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(state.expenseTransactions)
    );
  }, [state]);

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addIncome = incomeTransaction => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };

  const addExpense = expenseTransaction => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};