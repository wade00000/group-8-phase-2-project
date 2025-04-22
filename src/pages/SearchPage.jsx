import Book from '../components/Book';
import { SearchContext } from '../context/searchContext';
import { useContext } from 'react';

export default function SearchPage() {
	const { searchBooks } = useContext(SearchContext);
    // Displays the books received from the API
	return (
		<div>
			<h1>Search Page</h1>
			{searchBooks.length ? (
                searchBooks.map(book => {
                    return <Book key={book.id} book={book} />
                })
            ) : (
                <p>No books found.</p>
            )}
		</div>
	);
}
