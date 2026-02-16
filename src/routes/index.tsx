import { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Home } from '@pages/AddTaskPage';
import { EditTaskPage } from '@pages/EditTaskPage';
import { AppLayout } from '@pages/AppLayout';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:taskId" element={<EditTaskPage />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </Router>
  );
};
