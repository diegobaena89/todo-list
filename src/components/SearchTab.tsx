import styles from './SearchTab.module.css';
import { PlusCircle } from 'phosphor-react';

export function SearchTab() {
  return (
    <form className={styles.searchTab}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        <span>Criar</span> <PlusCircle size={15} />
      </button>
    </form>
  );
}
