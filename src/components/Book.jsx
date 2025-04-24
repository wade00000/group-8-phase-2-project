import { useState, useEffect, useContext } from 'react';
import usePostDelete from '../hooks/usePostDelete';
// import { useLocation } from 'react-router-dom';
import {SearchContext} from '../context/searchContext'
import '../Styles/Book.css';
import placeholder from '../assets/placeholder.jpg'

export default function Book({ book, searchOnly, setSelectedBook, forceUpdate }) {
  const { title, authors, publishedDate, description, imageLinks } = book.volumeInfo;
  const [isClick, setIsClick] = useState(false);

  // Same logic for favourites
	const {favourites} = useContext(SearchContext)
  const { postData, deleteData } = usePostDelete();
  // const location = useLocation();

  useEffect(() => {
    if (Array.isArray(favourites)) {
      const isFavourite = favourites.some((favBook) => favBook.id === book.id);
      setIsClick(isFavourite);
    }
  }, [favourites, book.id]);

  const handleClick = async () => {
    const newState = !isClick;
    setIsClick(newState);
    if (location.pathname === '/favourites') {
      forceUpdate();
    }
    if (newState) {
      try {
        await postData('http://localhost:3000/favourites', book);
      } catch {
        setIsClick(false);
      }
    } else {
      try {
        await deleteData(`http://localhost:3000/favourites/${book.id}`);
      } catch {
        setIsClick(true);
      }
    }
  };

  // Open the book details in center-focused modal
  const handleImageClick = () => {
    setSelectedBook(book); // This sets the clicked book to be displayed in the modal
  };

  return (
    <div className={`book ${searchOnly ? 'search-only' : ''}`} onClick={handleImageClick}>
      {/* Show image only if searchOnly is true */}
      <img
        src={imageLinks?.thumbnail || placeholder}
        alt={title}
        className="book-image"
      />

      {/* Show other book details only when not in search grid */}
      {!searchOnly && (
        <>
          <h2>{title}</h2>
          <p>{authors?.join(', ')}</p>
          <p>{publishedDate}</p>
          <p className="description">{description}</p>
          <button onClick={handleClick}>
            {isClick ? 'Remove from Favourites ★' : 'Add to Favourites ☆'}
          </button>
        </>
      )}
    </div>
  );
}
