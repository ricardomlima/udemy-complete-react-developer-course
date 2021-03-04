import React from "react";
import { connect } from "react-redux";
import { ExpenseForm } from "./ExpenseForms";
import { addExpense } from "../actions/expenses";

const AddExpensePage = connect()((props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
));

export { AddExpensePage };
