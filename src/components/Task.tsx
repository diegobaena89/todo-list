import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
  content: string;
  onDeleteTask: (content: string) => void;
  onSelectTask: () => void;
}

export function Task({ content, onDeleteTask, onSelectTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleSelectTask() {
    onSelectTask();
  }
  return (
    <div className={styles.taskContainer}>
      <label className={styles.myCheckbox}>
        <input onClick={handleSelectTask} type='checkbox' />
        <span className={styles.checkmark}></span>
      </label>
      <p>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
