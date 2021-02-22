

class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePickOptions = this.handlePickOptions.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
      this.state = {
        options: ["Testing"]
      }
    }
    componentDidMount() {
      console.log('oi')
    }
    componentDidUpdate(prevProps, prevState) {
      console.log(prevProps, prevState)
    }
    componentWillUnmount() {
      console.log('unmounted')
    }
    handleDeleteOption(optionToRemove){
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return option !==  optionToRemove;
        })
      }))
    }
    handleDeleteOptions(){
      
      this.setState(() => ({ options: [] }))
    }
    handlePickOptions() {
      console.log('testig')
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
  
      //  Array().push modifies the original list which is not accepted by React
      // concat returns a new list
      this.setState(prevState => ({ options: prevState.options.concat([option])}))
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
          <Options handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} />
        </div>
      );
    }
  }
  
  const Header = (props) => {
    const title = props.title;
    const subtitle = props.subtitle;
  
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
  
  const Actions = (props) => {
    return (
      <div>
        <button onClick={props.handlePickOptions} disabled={props.hasOptions}>What should I do?</button>
        <AddOption handleAddOption={props.handleAddOption} />
      </div>
    )
  }
  
  const Option = (props) => {
    const value = props.value;
    return (
      <div>
        {value}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(value)
          }}
        >remove</button>
      </div>
    );
  }
  
  const Options = (props) => {
    const options = props.options;
    return (
      <div>
        {options.length > 0 && (
          <div>
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            <div>
              {options.map((option) => (
                <Option 
                  key={option} 
                  value={option}
                  handleDeleteOption={props.handleDeleteOption} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
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
      this.setState(() => ({ error }))
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
  