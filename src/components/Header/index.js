import { Link } from "react-router-dom";
import { BsEmojiSmile, BsBellFill, BsSearch } from "react-icons/bs";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665725705/medical-logo-png-884_zsuaxx.png"
            alt="website logo"
          />
        </Link>
        <BsBellFill />
      </div>

      <div className="nav-content nav-bar-large-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dtvpdvwm9/image/upload/v1665725705/medical-logo-png-884_zsuaxx.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/consultation" className="link">
              Consultations
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/medicines" className="link">
              Medicines
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/labs" className="link">
              Laboratories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
