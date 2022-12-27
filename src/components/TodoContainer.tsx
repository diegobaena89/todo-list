import { useState } from 'react';
import { EmptyTask } from './EmptyTask';
import styles from './TodoContainer.module.css';

export function TodoContainer() {
  const [emptyTask, setEmptyTask] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tasks}>
          <p className={styles.createdTasks}>
            Tarefas criadas <span>0</span>
          </p>
          <p className={styles.concludedTasks}>
            Concluídas <span>0</span>
          </p>
        </div>
      </div>
      {emptyTask && <EmptyTask />}
    </>
  );
}
