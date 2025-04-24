import Book from '../components/Book';
import { SearchContext } from '../context/searchContext';
import { useContext } from 'react';
import '../Styles/SearchPage.css';


export default function SearchPage() {
	const { searchBooks } = useContext(SearchContext);
    // Displays the books received from the API
	return (
		<div className="container mt-5">
			<h1 className="text-center mb-4">Search Page</h1>
			{searchBooks.length ? (
				<div className="row justify-content-center">
					{searchBooks.map((book) => (
						<div key={book.id} className="col-md-2 col-sm-3 mb-4">
							{/* Pass searchOnly as true to display only the image */}
							<Book book={book} searchOnly={true} />
						</div>
					))}
				</div>
			) : (
				<p>No books found.</p>
			)}
		</div>
	);
}
