import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/SearchPage.css';
import '../Styles/Modal.css';
import BannerCarousel from '../components/BannerCarousel';
import AddToFavouritesButton from '../components/AddToFavouritesButton';
import AddToCollectionButton from '../components/AddToCollectionButton';
import '../Styles/BannerCarousel.css';
import BannerImage from '../assets/Banner5.jpg';
import Banner2 from '../assets/Banner6.jpg'; // Import Banner2 image



export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=featured&maxResults=20')
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  const bannerImage = BannerImage;
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container">
      {/* 🔥 Banner Carousel */}
      <BannerCarousel image={bannerImage} />

      {/* 🌟 Featured Books */}
      <h2 className="section-title-2">Featured Books</h2>
      {/* Paragraph: Explore the latest books */}
      <p className="explore-latest">Explore the latest books</p>      {books.length ? (
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

     <div className="banner2">
        <img
          src={Banner2}
          alt="Banner6"
          className="banner2-image"
        />
      </div>

      {/* 🆕 Recent Books */}
      <h2 className="section-title mt-5">Recent Books</h2>
      {/* Paragraph: Explore the newest books */}
      <p className="explore-newest">Explore the newest books</p>
            <div className="row justify-content-center">
        {books.slice(-10).map((book) => {
          const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
          if (!thumbnail) return null;

          return (
            <div key={book.id + "-recent"} className="col-md-2 col-sm-3 mb-4">
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
