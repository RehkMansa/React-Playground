import React from 'react';
import styles from './Info.module.css';
const Information = ({ nameOfItem, onSubmitFunc }) => {
  return (
    <div className={styles.information}>
      <h4>{nameOfItem}</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(onSubmitFunc);
          onSubmitFunc('Hello');
        }}
        className={styles.information__form}
      >
        <input />
        <button>Update</button>
      </form>
    </div>
  );
};

export default Information;
