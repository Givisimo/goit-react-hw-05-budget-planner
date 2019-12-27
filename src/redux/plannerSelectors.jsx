const getBudget = state => state.budget;
const getExpenses = state => state.expense;

const calculateAllExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = state => {
  return state.budget - calculateAllExpenses(state);
};

export default {
  getBudget,
  getExpenses,
  calculateAllExpenses,
  calculateBalance
};
