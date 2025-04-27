import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { useContext} from 'react';
import { SearchContext } from './context/searchContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import useFetch from './hooks/useFetch';
import Footer from './components/Footer';
import "./index.css";


function App() {

	const location = useLocation();
	const navigate = useNavigate();

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
  <Navbar handleSubmit={handleSubmit}  handleChange={handleChange} />	

  <main className="main-content" id = "main">
  <Outlet context={loading}/>
  </main>

  <Footer />

</>

	);
}

export default App;
