import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../components/Book'; // Ensure this path is correct

export default function Favourites() {
    const [favouriteBooks, setFavouriteBooks] = useState([]);

    const fetchFavouriteBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favourites');
            setFavouriteBooks(response.data); // Update the favourites list
        } catch (error) {
            console.error('Error fetching favourites:', error);
        }
    };

    useEffect(() => {
        fetchFavouriteBooks(); // Fetch favourite books when the component mounts
    }, []); // Empty array to run only once when component mounts

    return (
        <div>
            <h2>Your Favourites</h2>
            {favouriteBooks.length === 0 ? (
                <p>No favourites yet!</p>
            ) : (
                <div className="favourites-list">
                    {favouriteBooks.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
}
