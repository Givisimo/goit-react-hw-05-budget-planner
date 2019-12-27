import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import * as plannerActions from '../redux/plannerActions';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired,
  };

  state = {
    budget: 0,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onSave: budget => dispatch(plannerActions.budgetAdd(budget)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
