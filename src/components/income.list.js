/* import React, { useContext } from 'react'
import {  GlobalContext } from '../context/globalState'
import Income from "./income"

const IncomeList = () => {
    const { income } = useContext(GlobalContext)
    
    return (
        <div className="transactions transactions-income">
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                {income.map(incomeOrder => (

<Income
         key={incomeOrder.id}
         incomeOrder={incomeOrder} /> 
                )
                )
                }   
         
            
            </ul>
          
        </div>
    )
}

export default IncomeList  */

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
