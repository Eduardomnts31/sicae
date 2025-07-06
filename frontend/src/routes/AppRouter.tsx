import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import AnimationPage from '../components/AnimationStep/AnimationStep';
import { Home } from '../views/Dashboard/Home/Home';
import { Alumnos } from '../views/Dashboard/Alumnos/Alumnos';
import Asistencias from '../views/Dashboard/Asistencias/Asistencias';
import Calificaciones from '../views/Dashboard/Calificaciones/Calificaciones';
import PrivateRoute from './PrivateRoute';

const Dashboard = lazy(() => import('../views/Dashboard/Dashboard'));
const Login = lazy(() => import('../views/Login/Login'));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AnimationPage />}>
        
        <Route index element={<Navigate to='/login' />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="calificaciones" element={<Calificaciones />} />
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="apagos" element={<Alumnos />} />
          <Route index element={<Navigate to="home" />} />
        </Route>

      </Route>
    </Routes>
  );
};

export default AppRouter;
