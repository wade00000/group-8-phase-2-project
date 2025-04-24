// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Book from '../components/Book'; // Ensure this path is correct
import useFetch from '../hooks/useFetch';
import '../Styles/Favourites.css';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../context/searchContext';
import Loader from '../components/Loader';

export default function Favourites() {
	const { favourites, setFavourites } = useContext(SearchContext);
	const { data: favouriteBooks = [], loading, error, fetchData, forceUpdate} = useFetch('http://localhost:3000/favourites');

	// fetchData()
	useEffect(() => {
		fetchData();
	}, []);
	setFavourites(favouriteBooks);

	if (loading || favourites === null) return <Loader />;
	if (error) return <p>Error loading favourites: {error.message}</p>;

	return (
		<div className="container mt-5">
			<h2 className="text-center mb-4">Your Favourites</h2>
			{favourites?.length === 0 ? (
				<p>No favourites yet!</p>
			) : (
				<div className="row">
					{favourites.map((book) => (
						<div key={book.id} className="col-md-4 col-sm-6 mb-4">
							<Book key={book.id} book={book} forceUpdate={forceUpdate} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
