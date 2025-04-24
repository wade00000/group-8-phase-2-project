import { useState, createContext, useRef } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
    // States manage the value of the search bar and the books received from the API respectively
	const [searchTerm, setSearchTerm] = useState('');
	const [searchBooks, setSearchBooks] = useState(null);
	const [favourites, setFavourites] = useState(null);

	const searchUrl = useRef(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle:${searchTerm}&maxResults=40&key=AIzaSyBLGLvEaYHQiD2M_GxpYbcHCGtw_6sfVi4`)

	return <SearchContext.Provider value={{favourites, setFavourites, searchTerm, setSearchTerm, searchBooks, setSearchBooks, searchUrl }}>{children} </SearchContext.Provider>;
}

export { SearchContext, SearchProvider };
