import selectExpensesTotal from "../../selectors/expenses-total";

import expenses from "../fixtures/expenses";

test("should return 0 when expense list empty", () => {
  const results = selectExpensesTotal([]);
  expect(results).toEqual(0);
});

test("should summed amount with mulitple values", () => {
  const results = selectExpensesTotal(expenses);
  expect(results).toEqual(114195);
});

test("should summed amount with one value", () => {
  const results = selectExpensesTotal([expenses[0]]);
  expect(results).toEqual(195);
});
