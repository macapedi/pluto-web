import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/dashboard">
        <img src={logo} alt='navbar logo' aria-label="the logo is a picture of the planet pluto" className="header__logo"></img>
      </Link>
        <h1 className="header__title">PlutoWeb</h1>
    </div>
  );
}

export default Header;
