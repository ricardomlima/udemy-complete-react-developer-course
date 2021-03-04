import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("test should generate set start date action", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("test should generate set end date action", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("test should generate sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy: "date",
  });
});
test("test should generate sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy: "amount",
  });
});
test("test should generate set text with parameters", () => {
  const action = setTextFilter("search");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "search",
  });
});
test("test should generate set text without parameters", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
