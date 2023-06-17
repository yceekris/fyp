import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Registration from './pages/Registration/Registration';
import LoginPage from './pages/Login/LoginPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={Registration} />
        <Route path="/dashboard" Component={Dashboard} />
        {/* Add more routes for other pages */}
      </Routes>
  </Router>
  )
}

export default App