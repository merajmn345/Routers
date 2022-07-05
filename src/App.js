import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./component/About";
import User from "./component/User";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </nav>

          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route path="/user" element={<User />}></Route>
            <Route path="/user" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
