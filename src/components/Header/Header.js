import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/dashboard" className='header__title'><h1>PlutoWeb</h1></Link>

     
    </div>
  );
}

export default Header;
