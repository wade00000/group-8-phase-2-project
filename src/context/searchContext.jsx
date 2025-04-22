import { useState, createContext } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
    // States manage the value of the search bar and the books received from the API respectively
	const [searchTerm, setSearchTerm] = useState('');
	const [searchBooks, setSearchBooks] = useState([]);

	return <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchBooks, setSearchBooks }}>{children} </SearchContext.Provider>;
}

export { SearchContext, SearchProvider };
