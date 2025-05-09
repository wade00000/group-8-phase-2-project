import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import { useLocation } from 'react-router-dom';
import usePostDelete from '../hooks/usePostDelete';
import placeholder from '../assets/placeholder.jpg';
import '../Styles/Variables.css';
import '../Styles/Book.css';



export default function Book({ book, searchOnly, setSelectedBook, forceUpdate }) {
  const { title, authors, publishedDate, description, imageLinks } = book.volumeInfo;
  const [isClick, setIsClick] = useState(false);
  const { favourites } = useContext(SearchContext);
  const { postData, deleteData } = usePostDelete();
  const location = useLocation();
 

  useEffect(() => {
    if (Array.isArray(favourites)) {
      const isFavourite = favourites.some((favBook) => favBook.id === book.id);
      setIsClick(isFavourite);
    }
  }, [favourites, book.id]);

  const handleClick = async (e) => {
    e.stopPropagation(); // Prevent modal from opening when clicking the button
    const newState = !isClick;
    setIsClick(newState);
    
    if (location.pathname === '/favourites') {
      forceUpdate();
    }

    try {
      if (newState) {
        await postData('https://my-app-backend-lvfl.onrender.com/favourites', book);
      } else {
        await deleteData(`https://my-app-backend-lvfl.onrender.com/favourites/${book.id}`);
      }
    } catch {
      setIsClick(!newState); // Rollback state if error occurs
    }
  };

  const handleImageClick = () => {
    if (setSelectedBook) {
      setSelectedBook(book); // Open modal
    }
  };

 
  

  return (
    <div className={`book ${searchOnly ? 'search-only' : ''}`} onClick={handleImageClick}>
      <img
        src={imageLinks?.thumbnail || placeholder}
        alt={title}
        className="book-image"
      />

      {/* Only show book details if not in search view */}
      {!searchOnly && (
        <>
          <h2>{title}</h2>
          <p>{authors?.join(', ')}</p>
          <p>{publishedDate}</p>
          <p className="description">{description}</p>

          <div className="btn-container">
            <button onClick={handleClick}>
              {isClick ? 'Remove from Favourites ★' : 'Add to Favourites ☆'}
            </button>
           
          </div>
        </>
      )}
    </div>
  );
}
