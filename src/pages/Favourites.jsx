import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/searchContext';
import useFetch from '../hooks/useFetch';
import '../Styles/Favourites.css';
import Book from '../components/Book';
import Loader from '../components/Loader';
import AddToFavouritesButton from '../components/AddToFavouritesButton';
import '../Styles/Modal.css';

export default function Favourites() {
	const { favourites, setFavourites } = useContext(SearchContext);
	const { data: favouriteBooks = [], loading, error, fetchData, update } = useFetch('http://localhost:3000/favourites');

	// State for the modal
	const [selectedBook, setSelectedBook] = useState(null);

	function closeModal() {
		setFavourites((favourites) => favourites.filter((book) => book.id !== selectedBook.id));
		setSelectedBook(null);
	}

	// Fetch the favourites data
	useEffect(() => {
		fetchData();
	}, [update]);

	// Set favourites in context
	useEffect(() => {
		setFavourites(favouriteBooks);
	}, [favouriteBooks, setFavourites]);

	// If loading, show loader
	if (loading || favourites === null) return <Loader />;
	if (error) return <p>Error loading favourites: {error.message}</p>;

	return (
		<div className="container">
			<h2 className="text-center mb-4">Your Favourites</h2>

			{favourites?.length === 0 ? (
				<p>No favourites yet!</p>
			) : (
				<div className="row">
					{favourites.map((book) => (
						<div
							key={book.id}
							className="col-md-2 col-sm-3 mb-4"
							onClick={() => setSelectedBook(book)} // Clicking a book image opens the modal
						>
							<img
								src={book.volumeInfo.imageLinks?.thumbnail} // Only showing the book image
								alt={book.volumeInfo.title}
								className="book-image"
							/>
						</div>
					))}
				</div>
			)}

			{/* 📘 Modal */}
			{selectedBook && (
				<div className="overlay" onClick={() => setSelectedBook(null)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="close-btn" onClick={() => setSelectedBook(null)}>
							×
						</button>
						<div className="modal-header">
							<img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} className="modal-image" />
							<div className="modal-text">
								<h2>{selectedBook.volumeInfo.title}</h2>
								<p className="modal-author">{selectedBook.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
								<p className="modal-meta">
									{selectedBook.volumeInfo.publishedDate} · {selectedBook.volumeInfo.pageCount || 'N/A'} pages
								</p>
								<div className="modal-buttons">
									<a href={selectedBook.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="modal-btn">
										Read Preview
									</a>
									<AddToFavouritesButton book={selectedBook} className="modal-favourite-btn" closeModal={closeModal} />
								</div>
							</div>
						</div>
						<div className="modal-description">
							<p>{selectedBook.volumeInfo.description || 'No description available.'}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
