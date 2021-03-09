import React from "react";
import { shallow } from "enzyme";
import { ExpenseForm } from "../../components/ExpenseForms";
import expenses from "../fixtures/expenses";

test("should render form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expense form with data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
