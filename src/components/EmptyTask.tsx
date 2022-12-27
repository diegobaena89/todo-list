import styles from './EmptyTask.module.css';
import Clipboard from '../assets/images/Clipboard.png';

export function EmptyTask() {
  return (
    <div className={styles.emptyContainer}>
      <img src={Clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
