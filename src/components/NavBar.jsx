import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../Styles/NavBar.css'; // Optional: your custom styles
import '../Styles/Variables.css';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import '../Styles/Searchbar.css';
import logo from '../assets/logo.jpg';
import { FaUserCircle } from 'react-icons/fa';



const Navbar = ({handleSubmit, handleChange}) => {
  const {searchTerm} = useContext(SearchContext)
  return (
    <nav className="navbar">
    <div className="navbar-left">
      {/* The Link component will make the title clickable and navigate to /home */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">Open Library</span>
      </Link>
    </div>

  <div className="navbar-center">
    <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} value={searchTerm} />
  </div>

  <div className="navbar-right">
    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
    <NavLink to="/favourites" className={({ isActive }) => isActive ? 'active' : ''}>Favourites</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
    <a href="/profile" className="profile-icon">
    <FaUserCircle size={24} />
  </a>
  </div>
</nav>

  );
};

export default Navbar;
