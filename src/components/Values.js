import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Value from './Value';
import plannerSelectors from '../redux/plannerSelectors';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);
const mapStateToProps = state => {
  return {
    budget: plannerSelectors.getBudget(state),
    expenses: plannerSelectors.calculateAllExpenses(state),
    balance: plannerSelectors.calculateBalance(state)
  };
};
export default connect(mapStateToProps)(Values);
