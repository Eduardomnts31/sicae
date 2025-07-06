import { Outlet, useLocation } from 'react-router';
import { motion } from 'motion/react';
import type React from 'react';

interface PageAnimationProps {
  key?: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const AnimationPage = ({ key, children, className }: PageAnimationProps) => {
  const { pathname } = useLocation();

//   if (pathname.startsWith('/ruta a excluir')) return children ?? <Outlet />;

  return (
    <motion.div
      key={key ?? pathname}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%', height: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      {children ?? <Outlet />}
    </motion.div>
  );
};

export default AnimationPage;