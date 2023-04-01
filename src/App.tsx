import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage'
import HobbyPage from './hobby/HobbyPage';
import ResumePage from './resume/ResumePage';
import GalleryPage from './gallery/GalleryPage';

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/" className="logo">gasin</NavLink>
        <NavLink to="/" className="button rounded">Home</NavLink>
        <NavLink to="/hobby" className="button rounded">hobby</NavLink>
        <NavLink to="/resume" className="button rounded">resume</NavLink>
        <NavLink to="/gallery" className="button rounded">gallery</NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hobby" element={<HobbyPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
