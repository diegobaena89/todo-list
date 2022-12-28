import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <label className={styles.myCheckbox}>
        <input type='checkbox' />
      </label>
      <p>{content}</p>
      <Trash size={24} />
    </div>
  );
}
