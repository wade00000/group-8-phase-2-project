import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Book({ book }) {
    const { title, authors, publishedDate, description, imageLinks } = book.volumeInfo;
    const [isClick, setIsClick] = useState(false);

    //......................FAVOURITE VALIDATION...........................//
    // Fetch favourite books from the server (this will be updated if necessary)
    const fetchFavouriteBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favourites');
            return response.data;
        } catch (error) {
            console.error('Error fetching favourites:', error);
            return [];
        }
    };

    // Check if the book is already favourited when the component mounts
    useEffect(() => {
        const checkIfFavourite = async () => {
            const favourites = await fetchFavouriteBooks();
            const isFavourite = favourites.some((favBook) => favBook.id === book.id);
            setIsClick(isFavourite);
        };
        checkIfFavourite();
    }, [book.id]);
   //......................FAVOURITE VALIDATION...........................//



    const handleClick = async () => {
        const newState = !isClick;
        setIsClick(newState);  

        if (newState) {
            // If the book is being favourited, add it to the favourites list
            try {
                await axios.post('http://localhost:3000/favourites', book);
                console.log('Book added to favourites!');
            } catch (error) {
                console.error('Error adding book:', error);
                setIsClick(false); // Reset state if there's an error
            }
        } else {
            
            try {
                //Remove book from favourites
                await axios.delete(`http://localhost:3000/favourites/${book.id}`);
                console.log('Book removed from favourites!');
            } catch (error) {
                console.error('Error removing book:', error);
                setIsClick(true); // Reset state if there's an error
            }
        }
    };

    return (
        <div className="book">
            <img src={imageLinks?.thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{authors?.join(', ')}</p>
            <p>{publishedDate}</p>
            <p>{description}</p>
            <button onClick={handleClick}>
                Favourite {isClick ? '★' : '☆'}
            </button>
        </div>
    );
}
