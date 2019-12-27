import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import { connect } from 'react-redux';
import plannerSelectors from '../redux/plannerSelectors';
import * as plannerActions from '../redux/plannerActions';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => {
  return { items: plannerSelectors.getExpenses(state) };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(plannerActions.expenseRemove(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
