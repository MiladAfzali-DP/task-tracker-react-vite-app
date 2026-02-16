import { BreadCrumbs } from '@components/BreadCrumbs';
import { TaskProvider } from '@context/TaskContext';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <BreadCrumbs />
      <TaskProvider>
        <Outlet />
      </TaskProvider>
    </>
  );
}
