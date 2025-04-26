import { useContext, useEffect } from 'react';
import { CollectionContext } from '../context/collectionContext';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';
import Book from '../components/Book';


export default function Collections() {
  const { data, loading, error } = useFetch('http://localhost:3000/collections');
  const { collectionBooks, setCollectionBooks } = useContext(CollectionContext);

  // Sync the collectionBooks context with fetched data on first load
  useEffect(() => {
    if (Array.isArray(data)) {
      setCollectionBooks(data);
    }
  }, [data, setCollectionBooks]);

  if (loading) return <Loader />;
  if (error) return <p>Error loading collections: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Collection</h2>
      {collectionBooks.length === 0 ? (
        <p>No books in your collection yet!</p>
      ) : (
        <div className="row">
          {collectionBooks.map(book => (
            <div key={book.id} className="col-md-4 col-sm-6 mb-4">
              <Book book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
