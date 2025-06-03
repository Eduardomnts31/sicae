import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../views/Login/Login';


function ARoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default ARoutes;
