import { v4 as uuidv4 } from "uuid";

import database from '../firebase/firebase';

// ADD EXPENSE
const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});
// REMOVE EXPENSE
const removeExpense = ({ id = 0 } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// EDIT EXPENSEls
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      createdAt = 0,
      amount = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })

  }
}

export { addExpense, removeExpense, editExpense, startAddExpense };
