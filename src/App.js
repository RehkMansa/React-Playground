import React, { Component } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';

class App extends Component {
  state = {
    todo: '',
    todoList: [],
  };
  handleTodo = (value) => {
    this.setState({ todoTask: value });
  };
  addTodoItem = (task) => {
    let lastId = this.state.todoList.length;
    let taskTitle = task;
    task = {
      id: lastId + 1,
      title: task,
      completed: false,
    };
    this.setState({ todoList: [...this.state.todoList, task] });
  };
  completeTask = (todo) => {
    // todo.status = true;
    let filteredTodo = this.state.todoList.map((task) => {
      if (task.id == todo.id) {
        task.completed = true;
      }

      return task;
    });
    this.setState({ todoList: filteredTodo });
  };
  deleteTask = (todo) => {
    let filterTodo = this.state.todoList.filter((task) => {
      if (task.id != todo.id) {
        return task;
      }
    });
    this.setState({ todoList: filterTodo });
  };
  render() {
    return (
      <div className="app-body">
        <CreateTodo
          handleTextChange={this.handleTodo}
          todoItem={this.state.todoTask}
          onSubmit={this.addTodoItem}
        />
        <Todo
          todoList={this.state.todoList}
          completeTodo={this.completeTask}
          deleteTodo={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
