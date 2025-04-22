import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import { useContext, useEffect } from 'react';
import { SearchContext } from './context/searchContext';
import axios from 'axios';

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log('wow');
		if (location.pathname === '/') {
			navigate('/search');
		}
	}, [location, navigate]);

	const { searchTerm,searchBooks, setSearchBooks } = useContext(SearchContext);

	// Used this function instead of useFetch since useFetch could only work inside a custom hook or a component, and not in a function or conditional statement
	const fetchData = async (url) => {
		try {
			const json = await axios.get(url);
			setSearchBooks(json.data.items); // Save the data
		} catch (error) {
			console.error('Fetch error:', error);
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		fetchData(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle:king&maxResults=40&key=AIzaSyBLGLvEaYHQiD2M_GxpYbcHCGtw_6sfVi4`);
		if (location.pathname !== '/search') {
			navigate();
		}
	}

	return (
		<>
			<header style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
				<h2>NavBar</h2>
				<SearchBar handleSubmit={handleSubmit} />
			</header>
			<Outlet context={searchBooks} />
		</>
	);
}

export default App;
