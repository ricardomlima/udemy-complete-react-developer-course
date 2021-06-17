import React from "react";
import { shallow } from "enzyme";

import expenses from "../fixtures/expenses";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary", () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
