import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";

import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = (props) => {
  const summary = selectExpensesTotal(props.expenses);
  return <div>Total: {numeral(summary).format("$0,0.00")}</div>;
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
