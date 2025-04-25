import { useContext } from 'react';
import { CollectionContext } from '../context/collectionContext'; // Named import

function Collections() {
  const { collectionBooks, setCollectionBooks } = useContext(CollectionContext);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collectionBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collections;
