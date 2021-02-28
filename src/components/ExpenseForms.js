import React from "react";

class ExpenseForm extends React.Component {
  static displayName = "ExpenseForm";
  state = {
    description: "",
    note: "",
    amount: "",
  };
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
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
          <textarea
            onChange={this.onNoteChange}
            placeholder="add a note for your expense"
            value={this.state.note}
          />
        </form>
      </div>
    );
  }
}

export { ExpenseForm };
