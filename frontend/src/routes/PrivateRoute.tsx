
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import type { ReactNode } from 'react';
import type { RootState } from '../store/Rootstate';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth?.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
