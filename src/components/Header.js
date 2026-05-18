import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Mimice</h1>

      <nav>
        <Link to="/">Početna</Link>

        <Link to="/plaze">Plaže</Link>
        <Link to="/restorani">Restorani</Link>
        <Link to="/apartmani">Apartmani</Link>

        <Link to="/staro-selo">Staro selo</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}

export default Header;
