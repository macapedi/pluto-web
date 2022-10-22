import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Link to="/dashboard" className='footer__title'><h3 className='footer__title'>Made with Love at Pluto Hacks 2022</h3></Link>

     
    </div>
  );
}

export default Footer;
