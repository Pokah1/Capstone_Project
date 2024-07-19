// components/Content.js
import React from 'react';
import styles from '@/app/content/styles.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>Create Your Content</h1>
      </header>
      <section className={styles.toDoList}>
        <h2>To-Do List</h2>
        <input type="text" placeholder="New task..." />
        <button>Add</button>
        <ul className={styles.toDoListItems}>
          <li>Finish project</li>
          <li>Review PR</li>
          {/* Map over tasks */}
        </ul>
      </section>
      <section className={styles.statsGraph}>
        <h2>Statistics</h2>
        {/* Add a graph component here */}
      </section>
      <section className={styles.calendar}>
        <h2>Calendar</h2>
        <ul className={styles.calendarItems}>
          <li>Event 1: July 20</li>
          <li>Event 2: July 21</li>
          {/* Map over events */}
        </ul>
      </section>
    </div>
  );
};

export default Content;
