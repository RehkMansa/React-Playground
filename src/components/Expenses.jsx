import React from 'react';
import styles from './Expenses.module.css';
const Expenses = () => {
  const expense = ({ name, amount }) => (
    <div className={styles.expenses__single}>
      <p>{name}</p>
      <p>
        <span>{amount}</span>
      </p>
    </div>
  );
  return (
    <div className={styles.expenses}>
      <div className={styles.expenses__header}>
        <h3>My Expenses</h3>
        <form className={styles.expenses__searchBar}>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className={styles.expenses__container}>
        {expense({ name: 'Hello world', amount: 3 })}
        {expense({ name: 'Child fees', amount: 30 })}
        {expense({ name: 'Hotel', amount: 99 })}
        {expense({ name: 'Vacation world', amount: 60 })}
        {expense({ name: 'Thrift', amount: 20 })}
      </div>
    </div>
  );
};

export default Expenses;
