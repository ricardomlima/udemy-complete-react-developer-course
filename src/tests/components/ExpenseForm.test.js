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

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("errorState").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set desciption on input chagne", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea chagne", () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount on input change", () => {
  const value = "12.12";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount on input change if invalid value", () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {
      value,
    },
  });
  expect(wrapper.state("amount")).toBe("");
});
