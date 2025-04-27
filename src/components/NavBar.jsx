import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../assets/logo.jpg';
import '../Styles/NavBar.css'; 
import '../Styles/Variables.css';
import '../Styles/Searchbar.css';






const Navbar = ({handleSubmit, handleChange}) => {
  const {searchTerm} = useContext(SearchContext)
  return (
    <nav className="navbar">
     <div className="navbar-left">
      {/*title IS clickable and navigateS to /home */}
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
