import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, history, wrapper, expense;

beforeAll(() => {
  expense = expenses[0];
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      editExpense={editExpense}
      history={history}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {});
test("should handle removeExpense", () => {});
