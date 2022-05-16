import React from 'react';
import styles from './Header.module.css';
const Header = ({ onclick }) => {
  return (
    <div className={styles.header}>
      <h1>My Budget Planner 1.0</h1>
      <div className={styles.header__options}>
        <div>
          <h3>
            Budget: <span>$100</span>
          </h3>
          <button
            onClick={() => {
              onclick('Edit Budget', 'editBudget');
            }}
          >
            Edit
          </button>
        </div>
        <div>
          <h3>
            Balance: <span>$20</span>
          </h3>
          <button
            onClick={() => {
              onclick('View Budget Score', 'viewScore');
            }}
          >
            View Score
          </button>
        </div>
        <div>
          <h3>
            Expenses: <span>$50</span>
          </h3>
          <button
            onClick={() => {
              onclick('Add Liquidity', 'addLiquidity');
            }}
          >
            Add Liquidity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
