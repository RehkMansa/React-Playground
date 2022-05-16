import React from 'react';
import styles from './Expenses.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
const Expenses = ({ expenseList }) => {
  const expense = ({ name, amount, id }) => (
    <div key={id} className={styles.expenses__single}>
      <p>{name}</p>
      <div className={styles.expenseSingle__left}>
        <span>{amount}</span>
        <AiOutlineCloseCircle className={styles.expenseIcon} />
      </div>
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
        {expenseList.map((item) => {
          return expense({
            name: item.name,
            id: item.id,
            amount: `$${item.amount}`,
          });
        })}
      </div>
    </div>
  );
};

export default Expenses;
