import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id if not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const newExpense = {
    description: "testing",
    note: "testinggg",
    amount: 0,
    createdAt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state[3]).toEqual(newExpense);
});

test("should edit expense", () => {
  const editedExpense = {
    description: "new description",
    note: "new note",
    amount: 90000,
    createdAt: 1000,
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: editedExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({ ...editedExpense, id: expect.any(String) });
});

test("should not edit expense if not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
