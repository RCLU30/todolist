import React,{Component} from 'react';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''})
  }
  
  render(){
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input 
          id="todoInput"
          placeholder="Insert your task here..."
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </form>
      )
  }
}

export default TodoForm;