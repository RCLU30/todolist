import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import * as apiCalls from "./api";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }
  
  componentWillMount(){
    // fetch data
    this.loadTodos();
  }
  
  async toggleTodo(todo){
    let updatedTodo = await apiCalls.updatedTodo(todo)
    const todos = this.state.todos.map(todo => {
      return (todo._id === updatedTodo._id)
      ? {...todo, completed: !todo.completed}
      : todo
    });
    this.setState({todos: todos});
  }
  
  async deleteTodo(id){
    await apiCalls.removeTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({todos: todos});
  }
  
  async addTodo(val){
    // send post request
    let newTodo = await apiCalls.createTodo(val);
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  
  async loadTodos(){
    let todos = await apiCalls.getTodos();
    this.setState({todos});
  } 
  
  render() {
    const todos = this.state.todos.map((todo) => (
      <TodoItem 
        key={todo._id}
        {...todo}  
        onDelete={this.deleteTodo.bind(this, todo._id)}
        onToggle = {this.toggleTodo.bind(this, todo)}
      />
    ));
    return (
      <div className="TodoList">
        <header>
          <h1>todo<strong>list</strong></h1>
          <h2>A simple todo list app built with node and reactjs</h2>
        </header>

        <TodoForm addTodo={this.addTodo} />
        <ul className="list">
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;