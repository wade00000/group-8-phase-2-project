import { useState, useEffect, useContext } from 'react';
import { CollectionContext } from '../context/collectionContext';
import usePostDelete from '../hooks/usePostDelete';

export default function AddToCollectionButton({ book }) {
  const { collectionBooks, setCollectionBooks } = useContext(CollectionContext);
  const [isInCollection, setIsInCollection] = useState(false);
  const { postData, deleteData } = usePostDelete();

  // Check if the book is in the collection whenever collectionBooks changes
  useEffect(() => {
    const isBookInCollection = collectionBooks?.some((b) => b.id === book.id);
    setIsInCollection(isBookInCollection);
  }, [collectionBooks, book.id]);

  const handleAddToCollection = async (e) => {
    e.stopPropagation();
    const newState = !isInCollection; // Toggle state

    setIsInCollection(newState); // Update button state

    try {
      if (newState) {
        // If book isn't in collection, add it
        await postData('http://localhost:3000/collections', book);
        // Update the collection state and localStorage
        setCollectionBooks((prevBooks) => {
          const updatedBooks = [...prevBooks, book];
          localStorage.setItem('collectionBooks', JSON.stringify(updatedBooks)); // Save to localStorage
          return updatedBooks;
        });
      } else {
        // If book is in collection, remove it
        await deleteData(`http://localhost:3000/collections/${book.id}`);
        // Update the collection state and localStorage
        setCollectionBooks((prevBooks) => {
          const updatedBooks = prevBooks.filter((b) => b.id !== book.id);
          localStorage.setItem('collectionBooks', JSON.stringify(updatedBooks)); // Save to localStorage
          return updatedBooks;
        });
      }
    } catch (err) {
      setIsInCollection(!newState); // Revert button state if there's an error
      console.error('Error managing book in collection:', err);
    }
  };

  return (
    <button onClick={handleAddToCollection} className="btn btn-primary">
      {isInCollection ? 'Remove from Collection' : 'Add to Collection'}
    </button>
  );
}
