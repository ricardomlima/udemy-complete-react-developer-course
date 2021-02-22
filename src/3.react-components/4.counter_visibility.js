class Counter extends React.Component {
    handlePlusOne(){
      this.setState((prevState) => {
        return {
          count: prevState.count+1
        }
      })
    }
    handleMinusOne(){
      this.setState((prevState) => {
        return {
          count: prevState.count-1
        }
      })
    }
    handleReset(){
      this.setState((prevState) => {
        return {
          count: 0
        }
      })
    }
    handleVisibility(){
      this.setState(prevState => {
        return {
          count:prevState.count,
          visible: !prevState.visible
        }
      })
    }
    constructor(props){
      super(props);
      this.handleMinusOne = this.handleMinusOne.bind(this)
      this.handlePlusOne = this.handlePlusOne.bind(this)
      this.handleReset = this.handleReset.bind(this)
      this.handleVisibility = this.handleVisibility.bind(this)
      this.state = {
        count: props.count,
        visible:true
      }
  
    }
    render(){
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handlePlusOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
          <hr/>
          <button onClick={this.handleVisibility} >Should it be visible?</button>
          {this.state.visible && (<div>Secret text</div>)}
        </div>
      )
    }
  }
  Counter.defaultProps = {
    count: 0
  }
  
  ReactDOM.render(<Counter/>, document.getElementById('app'))
  
  