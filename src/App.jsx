import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { useContext, useEffect } from 'react';
import { SearchContext } from './context/searchContext';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CollectionContext } from './context/collectionContext';
import useFetch from './hooks/useFetch';


function App() {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log('ok');
		if (location.pathname === '/') {
			navigate('/search');
		}
	}, [location, navigate]);

	const { searchTerm, setSearchTerm, searchUrl, setSearchBooks } = useContext(SearchContext);
	const { data,loading, error ,fetchData: fetchBooks} = useFetch(searchUrl)
	setSearchBooks(data?.items || null);

	if (error) return <p>Fetch Error!</p>

	function handleSubmit(e) {
		e.preventDefault();
		searchUrl.current = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle:${searchTerm}&maxResults=40&key=AIzaSyBLGLvEaYHQiD2M_GxpYbcHCGtw_6sfVi4`
		console.log({searchUrl ,searchTerm})
		fetchBooks()
		if (location.pathname !== '/search') {
			navigate('/search');
		}
	}

	function handleChange(e) {
		setSearchTerm(e.target.value)
	}	

	return (
		<>
			<header style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
				<h2>NavBar</h2>
				<Link to="/favourites">Favourites</Link>
				<Link to="/collections">Collections</Link>
				<SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
			</header>
			<Outlet context={loading}/>
		</>
	);
}

export default App;
