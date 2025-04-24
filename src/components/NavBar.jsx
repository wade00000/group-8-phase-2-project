import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../Styles/NavBar.css'; // Optional: your custom styles
import '../Styles/Variables.css';

const Navbar = ({handleSubmit}) => {
  return (
    <nav className="navbar">
  <div className="navbar-content">
    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
    <NavLink to="/collections" className={({ isActive }) => isActive ? 'active' : ''}>Collections</NavLink>
    <NavLink to="/favourites" className={({ isActive }) => isActive ? 'active' : ''}>Favourites</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>

    <SearchBar handleSubmit={handleSubmit} />
  </div>
</nav>

  );
};

export default Navbar;
