import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Form from './shared/Form';
import * as plannerActions from '../redux/plannerActions';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import plannerSelectors from '../redux/plannerSelectors';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
    balance: T.number.isRequired,
  };

  state = {
    name: '',
    amount: ' ',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { name, amount } = this.state;
    e.preventDefault();
    if (!name) {
      // eslint-disable-next-line no-alert
      alert('expense name is missing');
      return;
    }
    if (amount <= 0) {
      // eslint-disable-next-line no-alert
      alert('expense amount is missing');
      return;
    }
    const expense = {
      name: this.state.name,
      amount: Number(this.state.amount),
    };
    if (expense.amount > this.props.balance) {
      alert('Balance is negative!');
      return;
    }
    this.props.onSave(expense);
    this.setState({ name: '', amount: ' ' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { balance: plannerSelectors.calculateBalance(state) };
};

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(plannerActions.expenseAdd(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
