import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../Styles/NavBar.css'; // Optional: your custom styles

const Navbar = ({handleSubmit}) => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>

      <NavLink 
        to="/collections" 
        className={({ isActive }) => isActive ? 'active' : ''}>
        Collections
      </NavLink>

      <NavLink 
        to="/favourites" 
        className={({ isActive }) => isActive ? 'active' : ''}>
        Favourites
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active' : ''}>
        About
      </NavLink>

      <div>
      <SearchBar handleSubmit={handleSubmit} /> 
      </div>
    </nav>
  );
};

export default Navbar;
