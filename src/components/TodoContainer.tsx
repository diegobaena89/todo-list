import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { EmptyTask } from './EmptyTask';
import { Task } from './Task';
import styles from './TodoContainer.module.css';

export function TodoContainer() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskSelected, setTaskSelected] = useState(0);

  function handleCreateNewTask(event: React.FormEvent) {
    event?.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksFilteres = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksFilteres);
    if (taskSelected > 0) {
      setTaskSelected(Number(taskSelected - 1));
    } else {
      return;
    }
  }

  function selectTask() {
    setTaskSelected(Number(taskSelected + 1));
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
            Concluídas <span>{taskSelected}</span>
          </p>
        </div>
      </div>
      {tasks.length <= 0 && <EmptyTask />}
      {tasks.map((userTask) => {
        return (
          <Task
            key={userTask}
            content={userTask}
            onDeleteTask={deleteTask}
            onSelectTask={selectTask}
          />
        );
      })}
    </>
  );
}
