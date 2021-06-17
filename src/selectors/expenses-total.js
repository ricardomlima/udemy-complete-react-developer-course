const reducer = (accumulator, currentValue) => accumulator + currentValue;

const selectExpensesTotal = (expenses) => {
  if (expenses.lenth === 0) {
    return 0;
  } else {
    const total = expenses.map((expense) => expense.amount).reduce(reducer, 0);
    return total;
  }
};

export default selectExpensesTotal;
