import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper, expense;

beforeAll(() => {
  expense = expenses[0];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")({
    description: "a test",
  });
  expect(editExpense).toHaveBeenCalledWith(expense.id, {
    description: "a test",
  });
});

test("should handle removeExpense", () => {
  wrapper.find("button").prop("onClick")();
  expect(removeExpense).toHaveBeenCalledWith({ id: expense.id });
});
