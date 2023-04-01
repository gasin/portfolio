import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage'
import HobbyPage from './hobby/HobbyPage';
import ResumePage from './resume/ResumePage';

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/" className="logo">gasin</NavLink>
        <NavLink to="/" className="button rounded">Home</NavLink>
        <NavLink to="/hobby" className="button rounded">hobby</NavLink>
        <NavLink to="/resume" className="button rounded">resume</NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hobby" element={<HobbyPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
