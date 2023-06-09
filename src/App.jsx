import "./App.scss";
import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
