import { combineReducers } from 'redux';
import * as types from './plannerTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.ADD_BUDGET:
      return action.payload.value;

    default:
      return state;
  }
};

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.payload.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});
