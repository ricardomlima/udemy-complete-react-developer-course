// SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY",
  sortBy: "date",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY",
  sortBy: "amount",
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SORT_START_DATE",
  startDate,
});
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SORT_END_DATE",
  endDate,
});

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate };
