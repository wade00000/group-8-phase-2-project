import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import usePostDelete from '../hooks/usePostDelete';
import { useLocation } from 'react-router-dom';
import '../Styles/SearchPage.css';
export default function AddToFavouritesButton({ book }) {
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

    try {
      if (newState) {
        await postData('http://localhost:3000/favourites', book);
      } else {
        await deleteData(`http://localhost:3000/favourites/${book.id}`);
      }
    } catch {
      setIsClick(!newState);
    }
  };

  return (
    <button onClick={handleClick} className="favourite-btn">
      {isClick ? '★ Remove from Favourites' : '☆ Add to Favourites'}
    </button>
  );
}
