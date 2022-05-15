import React from 'react';
import styles from './Form.module.css';

const CreateTodo = ({ handleTextChange, todoItem, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todoItem);
  };

  return (
    <div className={styles.formWrap}>
      <h2>Enter Todo Lists</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          cols="65"
          rows="2"
          onChange={(e) => {
            handleTextChange(e.currentTarget.value);
          }}
          placeholder="Example: Finish coding challenge"
        ></textarea>
        <button className={styles.formButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
