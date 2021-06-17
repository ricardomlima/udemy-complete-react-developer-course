import React from "react";
import ExpenseList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseListFilters from "./ExpenseListFilter";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export { ExpenseDashboardPage };
