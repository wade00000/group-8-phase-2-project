import { useState, useEffect } from 'react';
import '../Styles/SearchPage.css';
import axios from 'axios';
import AddToFavouritesButton from '../components/AddToFavouritesButton';
import '../Styles/Modal.css';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=featured&maxResults=20')
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Welcome to the Book App</h1>
      <h2 className="text-center mb-4">Featured Books</h2>

      {books.length ? (
        <div className="row justify-content-center">
          {books.map((book) => {
            const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
            if (!thumbnail) return null;

            return (
              <div key={book.id} className="col-md-2 col-sm-3 mb-4">
                <img
                  src={thumbnail}
                  alt={book.volumeInfo.title}
                  className="img-fluid book-thumbnail"
                  onClick={() => handleBookClick(book)}
                  style={{ cursor: 'pointer', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading featured books...</p>
      )}
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
          <a
            href={selectedBook.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-btn"
          >
            Read Preview
          </a>
          <AddToFavouritesButton book={selectedBook} />
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
