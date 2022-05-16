import React, { Component } from 'react';
import './App.css';
import AddExpenses from './components/AddExpense';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Information from './components/Information';

class App extends Component {
  state = {
    showInformation: false,
    handleClickFunc: this.editBudget,
    headerOptionName: '',
    budget: 300,
    expenseList: [
      { id: 1, name: 'Mall', amount: '30' },
      { id: 2, name: 'Car', amount: '10' },
      { id: 3, name: 'Clothes', amount: '20' },
      { id: 4, name: 'Food', amount: '300' },
    ],
  };

  handleHeaderClick = (name, func) => {
    this.setState({
      showInformation: true,
      // handleClickFunc: `this.${func}`,
      headerOptionName: name,
    });
  };

  editBudget = (value) => {
    console.log(value);
  };
  viewScore = (value) => {
    console.log(value);
  };
  addLiquidity = (value) => {
    console.log(value);
  };

  render() {
    return (
      <section className="app">
        <div className="app-body">
          <Header onclick={this.handleHeaderClick} />
          {this.state.showInformation && (
            <Information
              nameOfItem={this.state.headerOptionName}
              onSubmitFunc={this.state.handleClickFunc}
            />
          )}
          <Expenses expenseList={this.state.expenseList} />
        </div>
        <aside className="app-sidebar">
          <AddExpenses />
        </aside>
      </section>
    );
  }
}

export default App;
