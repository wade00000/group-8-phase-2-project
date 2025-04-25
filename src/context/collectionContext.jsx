import { createContext, useState, useEffect } from 'react';

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  // Load collection from localStorage if it exists
  const storedBooks = JSON.parse(localStorage.getItem('collectionBooks')) || [];
  const [collectionBooks, setCollectionBooks] = useState(storedBooks);
  const [favourites, setFavourites] = useState([]);

  // Save collectionBooks to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('collectionBooks', JSON.stringify(collectionBooks));
  }, [collectionBooks]);

  return (
    <CollectionContext.Provider
      value={{
        collectionBooks,
        setCollectionBooks,
        favourites,
        setFavourites,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export { CollectionContext, CollectionProvider };
