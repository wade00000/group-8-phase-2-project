// import useFetch from '../utils/useFetch';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';

export default function SearchBar({ handleSubmit }) {
	const { searchTerm, setSearchTerm } = useContext(SearchContext);

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Search title..." type="search" name="search" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
		</form>
	);
}
