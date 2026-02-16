import { AddEditTaskForm } from '@components/AddEditTaskForm';
import { TasksList } from '@components/TasksList';

export const Home = () => {
  return (
    <>
      <AddEditTaskForm />
      <TasksList />
    </>
  );
};
