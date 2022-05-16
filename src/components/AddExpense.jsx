import React from 'react';
import styles from './AddExpenses.module.css'
const AddExpenses = () => {
  return (
    <>
      <div className={styles.sidebar__title}>
        <h2>Add Expenses</h2>
      </div>
      <form className={styles.sidebar__form}>
        <label>Name</label>
        <input placeholder="Nike Shoes"></input>
        <label>Cost</label>
        <input placeholder="$30"></input>
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default AddExpenses;
