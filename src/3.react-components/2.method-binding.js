const obj = {
  name: "Vikram",
  getName() {
    return this.name;
  },
};

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["first", "second"];
    return (
      <div>
        <h1>title</h1>
        <Header title={title} subtitle={subtitle} />
        <Actions />
        <Options options={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    console.log(this.props);
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Actions extends React.Component {
  handlePick() {
    alert("handle Pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
        <AddOption />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const value = this.props.value;
    return <li key={value}>{value}</li>;
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
  }
  render() {
    const options = this.props.options;
    return (
      <div>
        {options.length && (
          <div>
            <button onClick={this.removeAll}> Remove All</button>
            <ul>
              {options.map((option) => (
                <Option key={option} value={option} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();
    console.log(e.target.elements.option.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" id="indecision_option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
