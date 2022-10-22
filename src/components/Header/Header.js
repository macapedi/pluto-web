import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/dashboard">
        <img src={logo} className="header__logo"></img>
      </Link>
      <Link to="/dashboard" className="header__title">
        <h1>PlutoWeb</h1>
      </Link>
    </div>
  );
}

export default Header;
