import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import { getVisibleExpenses } from "./selectors/expenses";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 20 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 150 }));
store.dispatch(setTextFilter("water"));

const state = store.getState();

const expenses = getVisibleExpenses(state.expenses, state.filters);
console.log(expenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
