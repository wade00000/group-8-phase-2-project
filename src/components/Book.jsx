import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import usePostDelete from '../hooks/usePostDelete';

export default function Book({ book, forceUpdate }) {
	// console.log(forceUpdate)
	const { title, authors, publishedDate, description, imageLinks } = book.volumeInfo;
	const [isClick, setIsClick] = useState(false);

	const { data: favourites = [] } = useFetch('http://localhost:3000/favourites');
	const { postData, deleteData } = usePostDelete();


    //Favourite Validation
	useEffect(() => {
        // Waits for the array data in favourites to be fetched before acting on it
		if (Array.isArray(favourites)) {
            const isFavourite = favourites.some((favBook) => favBook.id === book.id);
            setIsClick(isFavourite);
          }
	}, [favourites, book.id]);


    //Handling button click
	const handleClick = async () => {
		const newState = !isClick;
		setIsClick(newState);
		forceUpdate()

		if (newState) {
			try {
                //Adds book to favourites
				await postData('http://localhost:3000/favourites', book);
                console.log('Added to favourites')
			} catch {
				setIsClick(false);
			}
		} else {
			try {
                //Removes book from favourites
				await deleteData(`http://localhost:3000/favourites/${book.id}`);
                console.log('Removed from favourites')
			} catch {
				setIsClick(true);
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
			 {isClick ? 'Remove from Favourites' + ' ★' : 'Add to Favourites' + ' ☆'}
			</button>
		</div>
	);
}
