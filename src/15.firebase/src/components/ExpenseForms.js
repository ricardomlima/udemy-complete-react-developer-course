import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  static displayName = "ExpenseForm";
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errorState: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{1,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        errorState: "Please provide description and amount.",
      }));
    } else {
      this.setState(() => ({ errorState: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autofocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(dat) => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="add a note for your expense"
            value={this.state.note}
          />
          <input type="submit" />
        </form>
        {this.state.errorState && <div>{this.state.errorState}</div>}
      </div>
    );
  }
}

export { ExpenseForm };
