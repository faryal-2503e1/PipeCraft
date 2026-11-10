
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link className="nav-logo" to="/">
          <span className="logo-icon">✿</span>
          <span>
            Pipe<span className="logo-highlight">Craft</span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Navigation Links */}
        <div className="nav-content">

          <ul className="nav-menu">
            <li>
              <NavLink to="/" end className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/tutorials" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
                Tutorials
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
                Contact
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
