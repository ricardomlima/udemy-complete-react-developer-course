import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const now = moment().valueOf();

store.dispatch(
  addExpense({ description: "Water bill", amount: 20, createdAt: now })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 150, createdAt: now })
);

store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: now })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
