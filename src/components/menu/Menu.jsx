import "./Menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#home" onClick={()=>{setMenuOpen(false)}}>home</a>
        </li>
        <li>
          <a href="#works" onClick={()=>{setMenuOpen(false)}}>Works</a>
        </li>
        <li>
          <a href="#contact" onClick={()=>{setMenuOpen(false)}}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
