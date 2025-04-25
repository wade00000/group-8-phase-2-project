import { createContext, useState } from 'react';

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [collectionBooks, setCollectionBooks] = useState([]);
  const [favourites, setFavourites] = useState([]); // <-- Add favourites here

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
