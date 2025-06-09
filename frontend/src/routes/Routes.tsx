import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute'; 
import Dashboard from '../views/Dashboard/Dashboard';
import { Login } from '../views/Login/Login';

const ARoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Dashboard"
        element={
            <Dashboard />
          // <PrivateRoute>
          // </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default ARoutes;
