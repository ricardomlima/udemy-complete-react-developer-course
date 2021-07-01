import React from "react";
import { connect } from "react-redux";
import { ExpenseForm } from "./ExpenseForms";
import { startAddExpense } from "../actions/expenses";

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
