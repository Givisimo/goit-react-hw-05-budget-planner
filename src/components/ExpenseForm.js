import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Form from './shared/Form';
import * as plannerActions from '../redux/plannerActions';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };

  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const expense = {
      name: this.state.name,
      amount: Number(this.state.amount),
    };

    this.props.onSave(expense);
    this.setState({ name: '', amount: 0 });
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

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(plannerActions.expenseAdd(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
