import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { EmptyTask } from './EmptyTask';
import { Task } from './Task';
import styles from './TodoContainer.module.css';

export function TodoContainer() {
  const [emptyTask, setEmptyTask] = useState(true);
  const [tasks, setTasks] = useState(['Estudar React']);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.searchTab}>
        <input
          name='taskArea'
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          value={newTaskText}
        />
        <button type='submit'>
          <span>Criar</span> <PlusCircle size={15} />
        </button>
      </form>

      <div className={styles.container}>
        <div className={styles.tasks}>
          <p className={styles.createdTasks}>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p className={styles.concludedTasks}>
            Concluídas <span>0</span>
          </p>
        </div>
      </div>
      {tasks.map((userTask) => {
        return <Task content={userTask} />;
      })}
    </>
  );
}
