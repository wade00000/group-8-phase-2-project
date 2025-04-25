import { useState } from 'react';

// This custom hook handles sending (POST) data to an API
const usePost = (url) => {
	// Stores the response returned by the API after posting
	const [response, setResponse] = useState(null);

	// Tracks whether the request is still in progress
	const [loading, setLoading] = useState(false);

	// This function is used to send data to the API
	const postData = async (dataToSend) => {
		setLoading(true); // Start loading
		try {
			// Send a POST request with JSON data
			const res = await fetch(url, {
				method: 'POST', // HTTP POST method
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataToSend), // Convert object to JSON string
			});

			// Get the response from the API
			const json = await res.json();
			setResponse(json); // Save response
		} catch (error) {
			console.error('Post error:', error); // Log any error
		} finally {
			setLoading(false); // Done loading
		}
	};

	// Return the response, loading state, and the function to trigger POST
	return { response, postData, loading };
};

export default usePost;
