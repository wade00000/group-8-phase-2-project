import { createContext, useState } from 'react';

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [collectionBooks, setCollectionBooks] = useState([]);

  return (
    <CollectionContext.Provider value={{ collectionBooks, setCollectionBooks }}>
      {children}
    </CollectionContext.Provider>
  );
}

export { CollectionContext, CollectionProvider };  // Named export
