import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { ExpenseDashboardPage } from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import { HelpPage } from "../components/HelpPage";
import { NotFound } from "../components/AddExpensePage";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={ExpenseDashboardPage}></Route>
      <Route exact={true} path="/create" component={AddExpensePage}></Route>
      <Route exact={true} path="/edit/:id" component={EditExpensePage}></Route>
      <Route exact={true} path="/help" component={HelpPage}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export { AppRouter };
