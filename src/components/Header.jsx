import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>My Budget Planner 1.0</h1>
      <div className={styles.header__options}>
        <div>
          <h3>
            Budget: <spam>$100</spam>
          </h3>
          <button>Edit</button>
        </div>
        <div>
          <h3>
            Balance: <spam>$20</spam>
          </h3>
          <button>View Score</button>
        </div>
        <div>
          <h3>
            Expenses: <spam>$50</spam>
          </h3>
          <button>Add Liquidity</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
