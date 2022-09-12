import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import SearchWindow from "./components/SearchWindow";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to MERN'd Black</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages/Favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/pages/About">About</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Favorites" element={<Favorites />} />
            <Route path="/pages/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
