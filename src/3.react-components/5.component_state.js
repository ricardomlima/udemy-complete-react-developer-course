

class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePickOptions = this.handlePickOptions.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        options: ["Testing"]
      }
    }
    handleDeleteOptions(){
      this.setState(()=>{
        return {
          options: []
        }
      })
    }
    handlePickOptions() {
      const optionsLength = this.state.options.length
      const selectedOption = this.state.options[Math.floor(Math.random()*optionsLength)]
      alert(selectedOption);
    }
    handleAddOption(option){   
      
      if (!option){
        return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > -1){
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        //  Array().push modifies the original list which is not accepted by React
        // concat returns a new list
        return {
          options: prevState.options.concat([option])
        }
      })
    }
    render() {
      const title = "Indecision";
      const subtitle = "Put your life in the hands of a computer";
      return (
        <div>
          <h1>title</h1>
          <Header title={title} subtitle={subtitle} />
          <Actions 
            handleAddOption={this.handleAddOption} 
            handlePickOptions={this.handlePickOptions} hasOptions={!this.state.options.length > 0} 
          />
          <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      const title = this.props.title;
      const subtitle = this.props.subtitle;
  
      return (
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      );
    }
  }
  
  class Actions extends React.Component {
    
    render() {
      return (
        <div>
          <button onClick={this.props.handlePickOptions} disabled={this.props.hasOptions}>What should I do?</button>
          <AddOption handleAddOption={this.props.handleAddOption} />
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
    
    render() {
      const options = this.props.options;
      return (
        <div>
          {options.length > 0 && (
            <div>
              <button onClick={this.props.handleDeleteOptions}> Remove All</button>
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
    constructor(props){
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
        error: undefined
      }
    }
  
    handleAddOption(e){
      e.preventDefault()
      const option = e.target.elements.option.value;
      const error =  this.props.handleAddOption(option)
      this.setState(()=>{
        return { error };
      }) 
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" id="indecision_option" />
            <button>Add option</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  