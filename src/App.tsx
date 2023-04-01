import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage'
import HobbyPage from './hobby/HobbyPage';

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/" className="logo">Portfolio</NavLink>
        <NavLink to="/" className="button rounded">Home</NavLink>
        <NavLink to="/hobby" className="button rounded">hobby</NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hobby" element={<HobbyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
