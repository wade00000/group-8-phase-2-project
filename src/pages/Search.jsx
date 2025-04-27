import { useState, useContext } from 'react';
import Book from '../components/Book';
import { SearchContext } from '../context/searchContext';
import '../Styles/SearchPage.css';
import { useOutletContext } from 'react-router-dom';
import Loader from '../components/Loader';
import AddToFavouritesButton from '../components/AddToFavouritesButton';
import AddToCollectionButton from '../components/AddToCollectionButton';
import '../Styles/Modal.css';

export default function Search() {
  const { searchBooks } = useContext(SearchContext);
  const [selectedBook, setSelectedBook] = useState(null);
  const loading = useOutletContext()

  // This function is used to set the clicked book as selected
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null); // Close the modal by setting selectedBook to null
  };

  if (loading) return <Loader />

  if (searchBooks === null) {
    return <p>Search for your favourite book</p>; // Show loading state if searchBooks is not available
  }

  return (
    <div className="container">
      <h1 className="text-center mb-4">Search Page</h1>

      {/* Display books */}
      {searchBooks.length ? (
        <div className="book-grid">
          {searchBooks.map((book) => (
            <div key={book.id} className="book-item">
              <Book
                book={book}
                searchOnly={true}
                setSelectedBook={handleBookClick} // Pass the function to Book component
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}

       {/* 📘 Modal */}
            {selectedBook && (
              <div className="overlay" onClick={handleCloseModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={handleCloseModal}>×</button>
                  <div className="modal-header">
                    <img
                      src={selectedBook.volumeInfo.imageLinks?.thumbnail}
                      alt={selectedBook.volumeInfo.title}
                      className="modal-image"
                    />
                    <div className="modal-text">
                      <h2>{selectedBook.volumeInfo.title}</h2>
                      <p className="modal-author">
                        {selectedBook.volumeInfo.authors?.join(', ') || 'Unknown Author'}
                      </p>
                      <p className="modal-meta">
                        {selectedBook.volumeInfo.publishedDate} · {selectedBook.volumeInfo.pageCount || 'N/A'} pages
                      </p>
                      <div className="modal-buttons">
                          <a
                            href={selectedBook.volumeInfo.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-btn"
                          >
                            Read Preview
                          </a>
                          <AddToFavouritesButton book={selectedBook} className="modal-favourite-btn" />
                          </div>
                    </div>
                  </div>
                  <div className="modal-description">
                    <p>{selectedBook.volumeInfo.description || "No description available."}</p>
                  </div>
                </div>
              </div>
)}

    </div>
  );
}
