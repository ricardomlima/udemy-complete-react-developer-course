import { v4 as uuidv4 } from "uuid";

// ADD EXPENSE
const addExpense = ({
  description = "",
  note = "",
  createdAt = 0,
  amount = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    note,
    description,
    createdAt,
  },
});
// REMOVE EXPENSE
const removeExpense = ({ id = 0 } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export { addExpense, removeExpense, editExpense };
