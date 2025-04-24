import { useState, useEffect } from 'react';
import Book from '../components/Book';
import '../Styles/SearchPage.css'; // Optional, reuse modal styles from Search
import axios from 'axios';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fetch some default books to show on home page
  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=featured')
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
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the Book App</h1>
      <h2>Featured Books</h2>

      {books.length ? (
        <div className="row justify-content-center">
          {books.map((book) => (
            <div key={book.id} className="col-md-2 col-sm-3 mb-4">
              <Book
                book={book}
                searchOnly={true}
                setSelectedBook={handleBookClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading featured books...</p>
      )}

      {selectedBook && (
        <div className="overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBook.volumeInfo.title}</h2>
            <img
              src={selectedBook.volumeInfo.imageLinks?.thumbnail}
              alt={selectedBook.volumeInfo.title}
              className="modal-image"
            />
            <p>{selectedBook.volumeInfo.description}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
