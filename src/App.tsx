import './App.css';
import GitHubLogo from './assets/github-mark.png';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage'
import ResumePage from './resume/ResumePage';
import GalleryPage from './gallery/GalleryPage';

function App() {
  return (
    <Router>
      <header>
        <NavLink to="/" className="logo">gasin</NavLink>
        <NavLink to="/" className="button rounded">Home</NavLink>
        <NavLink to="/gallery" className="button rounded">gallery</NavLink>
        <NavLink to="/resume" className="button rounded">resume</NavLink>
        <span className="logo">
          <a href="https://github.com/gasin/portfolio">
            <img src={GitHubLogo} alt="GitHub" style={{height: "65%"}}></img>
          </a>
        </span>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
