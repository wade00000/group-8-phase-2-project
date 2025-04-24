import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css'; // Optional: your custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">LIBRARY</h1>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/collection" className={({ isActive }) => isActive ? 'active' : ''}>Collection</NavLink></li>
        <li><NavLink to="/favourite" className={({ isActive }) => isActive ? 'active' : ''}>Favourite</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
