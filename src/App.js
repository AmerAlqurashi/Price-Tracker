import React from 'react'
import './App.css';
import Header from './components/header'
import Balance from './components/balance'
import Tranz from './components/tranz'
import IncomeList from './components/income.list'
import ExpenseList from './components/expenseList'
import { GlobalContextProvider } from './context/GlobalState'


const App = () => {
  //const [name, setName] = useState('amer')
  return (
<GlobalContextProvider>
   <div className="container">
    <div className="app-wrapper">
      <Header />
      <Balance />
      <Tranz />
      <IncomeList />
      <ExpenseList />
    </div>
  </div>
</GlobalContextProvider>
   

   
 
  )
}

export default App
