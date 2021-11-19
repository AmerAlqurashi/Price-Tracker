/* export default(state, action) => {
 switch(action.type) {
     default:
         return state
 }
} */
export default (state, action) => {
    switch (action.type) {
      case "ADD_INCOME":
        return {
          ...state,
          incomeTransactions: [action.payload, ...state.incomeTransactions]
        };
      case "ADD_EXPENSE":
        return {
          ...state,
          expenseTransactions: [...state.expenseTransactions, action.payload]
        };
      case "DELETE_TRANSACTION":
        return {
          ...state,
          incomeTransactions: state.incomeTransactions.filter(
            incomeTransaction => incomeTransaction.id !== action.payload
          ),
          expenseTransactions: state.expenseTransactions.filter(
            expenseTransaction => expenseTransaction.id !== action.payload.id
          )
        };
  
      default:
        return state;
    }
  };


