import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from '../components/Book'; // Ensure this path is correct
import useFetch from '../hooks/useFetch';


export default function Favourites() {

	
	const {data : favouriteBooks = [],loading,error} = useFetch('http://localhost:3000/favourites')
	
    if(loading) return <p>Loading favourites...</p>
	if(error) return <p>Error loading favourites : {error.message}</p>
    
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
