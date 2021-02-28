import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      onChange={(e) => {
        const sortByValue = e.target.value;
        if (sortByValue == "date") {
          props.dispatch(sortByDate());
        }
        if (sortByValue == "amount") {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToPropos = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToPropos)(ExpenseListFilters);
