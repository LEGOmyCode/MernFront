import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import AddLocation from "./pages/Add";
import About from "./pages/About";

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
                <Link style={{ textDecoration: "none" }} to="/pages/favorites">
                  Locations
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/pages/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/favorites" element={<Favorites />} />
            <Route path="/pages/about" element={<About />} />
            {/* <Route path="/pages/Error" element={<Error />} /> */}
          </Routes>
        </div>
      </Router>
    </div>

    // <Router>
    //   <div>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/pages/favorites" component={Favorites} />
    //     <Route path="/pages/add" component={AddLocation} />
    //   </div>
    // </Router>
  );
}

export default App;
