// import useFetch from '../utils/useFetch';
// import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import '../Styles/Variables.css';
import '../Styles/Searchbar.css'; // Optional: your custom styles

export default function SearchBar({ handleSubmit, value, handleChange }) {
	// const { searchTerm, setSearchTerm } = useContext(SearchContext);

	return (
		<form onSubmit={handleSubmit} className="search-bar">
			<input
				placeholder="Search title..."
				type="search"
				name="search"
				id="search"
				value={value}
				onChange={handleChange}
				className="search-input"
			/>
		</form>
	);
}
