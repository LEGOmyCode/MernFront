import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className="navBar">
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/pages/Favorites">
                  Favorites
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/pages/About">
                  About
                </Link>
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
