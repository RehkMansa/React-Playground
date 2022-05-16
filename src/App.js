import React, { Component } from 'react';
import './App.css';
import AddExpenses from './components/AddExpense';
import Expenses from './components/Expenses';
import Header from './components/Header';

class App extends Component {
  state = {
    todo: '',
    todoList: [],
  };
  render() {
    return (
      <section className="app">
        <div className="app-body">
          <Header />
          <Expenses />
        </div>
        <aside className="app-sidebar">
          <AddExpenses />
        </aside>
      </section>
    );
  }
}

export default App;
