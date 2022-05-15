import React from 'react';
import styles from './Todo.module.css';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
const Todo = ({ todoList, deleteTodo, completeTodo }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.todoHeader}>
        <h3>Your Todo List</h3>
      </div>
      <div className={styles.todoList}>
        {todoList.length >= 1 ? (
          todoList.map((todo) => {
            const status = todo.completed == true ? 'completed' : '';
            return (
              <div
                key={todo.id}
                className={`${styles.todoWrapper} ${styles[status]}`}
              >
                <p>{todo.title}</p>
                <div className={styles.todoButtons}>
                  <AiOutlineCheckCircle
                    onClick={() => {
                      completeTodo(todo);
                    }}
                    className={`${styles.iconChecked} ${styles.icon}`}
                  />
                  <button
                    onClick={() => {
                      deleteTodo(todo);
                    }}
                    className={`${styles.btnDelete} ${styles[status]}`}
                  >
                    Delete
                  </button>
                  <AiOutlineCloseCircle
                    onClick={() => {
                      deleteTodo(todo);
                    }}
                    className={`${styles.iconDelete} ${styles.icon}`}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.todoBlank}>
            <p>Enter Item to begin creating your todo list</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
