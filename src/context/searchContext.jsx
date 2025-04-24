import { useState, createContext } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchBooks, setSearchBooks] = useState([]);
	const [favourites, setFavourites] = useState([]); // ✅ Add this line

	return (
		<SearchContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				searchBooks,
				setSearchBooks,
				favourites,        // ✅ Add this line
				setFavourites,     // ✅ And this one
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}

export { SearchContext, SearchProvider };
