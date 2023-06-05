import { Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "../src/Photos/logo.jpeg";
// Pages importation
import Home from "./Pages/Home";
import Individuals from "./Pages/Individuals";
import Teams from "./Pages/Teams";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar-fixed-top bg-light fixed-top">
          <NavLink to="/">
            <img
              className="fixed-top"
              src={logo}
              alt="logo"
              style={{ width: "120px", marginLeft: "85px" }}
            />
          </NavLink>
          <NavLink to="individuals">Individuals</NavLink>
          <NavLink to="teams">Teams</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="individuals" element={<Individuals />} />
          <Route path="teams" element={<Teams />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
