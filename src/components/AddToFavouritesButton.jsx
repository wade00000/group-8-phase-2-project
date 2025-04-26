import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import usePostDelete from '../hooks/usePostDelete';
import { useLocation } from 'react-router-dom';
import '../Styles/SearchPage.css';
export default function AddToFavouritesButton({ book, className = '', closeModal }) {
  const { favourites } = useContext(SearchContext);
  const { postData, deleteData } = usePostDelete();
  const location = useLocation();

  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const isFav = favourites?.some((fav) => fav.id === book.id);
    setIsClick(isFav);
  }, [favourites, book.id]);

  const handleClick = async (e) => {
    e.stopPropagation();
    const newState = !isClick;
    setIsClick(newState);

    // Close the modal if the current page is favourites
    if (location.pathname === '/favourites') {
      closeModal();
    }

    try {
      if (newState) {
        await postData('https://my-app-backend-lvfl.onrender.com/favourites', book);
      } else {
        await deleteData(`https://my-app-backend-lvfl.onrender.com/favourites/${book.id}`);
      }
    } catch {
      setIsClick(!newState);
    }
  };

  return (
    <button onClick={handleClick} className={`favourite-btn ${className}`}>
      {isClick ? '★ Remove from Favourites' : '☆ Add to Favourites'}
    </button>
  );
}

