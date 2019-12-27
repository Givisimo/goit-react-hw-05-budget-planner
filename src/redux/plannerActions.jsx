import shortid from 'shortid';
import * as types from './plannerTypes';

export const budgetAdd = sum => {
  return {
    type: types.ADD_BUDGET,
    payload: {
      value: sum,
    },
  };
};

export const expenseAdd = ({ name, amount }) => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount,
      },
    },
  };
};

export const expenseRemove = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
