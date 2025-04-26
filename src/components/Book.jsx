import { useState, useEffect, useContext } from 'react';
import usePostDelete from '../hooks/usePostDelete';
import { SearchContext } from '../context/searchContext';
import '../Styles/Book.css';
import placeholder from '../assets/placeholder.jpg';
import '../Styles/Variables.css';
import { useLocation } from 'react-router-dom';
import { CollectionContext } from '../context/collectionContext';

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
        await postData('http://localhost:3000/favourites', book);
      } else {
        await deleteData(`http://localhost:3000/favourites/${book.id}`);
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

  const handleAddToCollection = async (book) => {
    const alreadyInCollection = collectionBooks.some(b => b.id === book.id);
    if (alreadyInCollection) return; //Avoid duplicates
  
    try {
      await postData('http://localhost:3000/collections', book);
      setCollectionBooks([...collectionBooks, book]); // Update local state
    } catch (err) {
      console.error('Failed to add to collection:', err);
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
