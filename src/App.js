// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Membership from './pages/Membership';
import './sass/style.css';
import Orders from './pages/Oders';
import Help from './pages/Help';
// import Layout from './layout/layout';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="membership" element={<Membership />} />
       <Route path="orders" element={<Orders />} />
        <Route path="help" element={<Help />} />

    </Route>
  </Routes>
</Router>
  );
}

export default App;
