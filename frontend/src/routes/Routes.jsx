import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Login/Login';
import Dashboard from '../views/Dashboard/Dashboard';


function ARoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default ARoutes;
